import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { TokenStorageService } from '../services/token-storage.service';


interface Course {
  id: number;
  title: string;
  level: number;
  description: string;
  price: number;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course;
  currentUser: any;

  constructor(private token: TokenStorageService, private courses: CourseService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getAllCourses()
  }

  getAllCourses(){
    this.courses.getCourses()
    .subscribe(data => {
      this.course = data;
    },
        error => {
          console.log(error)
        });
  }


}
