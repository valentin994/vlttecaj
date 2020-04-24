import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const API_URL = '/api/course/';

@Injectable({
    providedIn: 'root'
  })
  export class CourseService {
  
    constructor(private http: HttpClient) { }
  
  
    getCourses(): Observable<any> {
      return this.http.get(API_URL);
    }
  }
  