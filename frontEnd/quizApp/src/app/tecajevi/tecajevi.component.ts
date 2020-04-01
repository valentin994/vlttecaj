import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../services/tutorials.service';
import { Tutorial } from '../services/tutorial';


@Component({
  selector: 'app-tecajevi',
  templateUrl: './tecajevi.component.html',
  styleUrls: ['./tecajevi.component.css']
})


export class TecajeviComponent implements OnInit {
 


  constructor(private tutorialService: TutorialService) { }
  
  exp:number=0;

  addExp():void{
    this.exp += 1;
  }
  resetExp():void{
    this.exp = 0;
  }
 
  brojPitanja:number = 0;
  provjeriZadatak(ans:number):void{
      if(ans == this.tutorials[this.brojPitanja].id){
        console.log('tocno');
        this.addExp();
        this.brojPitanja+=1;
      }
      else{
        console.log('nista');
      }
  }

  ngOnInit() {
    this.getTutorials();
  }

  tutorials: Tutorial[];
  getTutorials(): void {
    this.tutorialService.getTutorial()
        .subscribe(tutorial => this.tutorials = tutorial);
  }
}
