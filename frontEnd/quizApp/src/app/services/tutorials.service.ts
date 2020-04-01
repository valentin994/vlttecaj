import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tutorial } from './tutorial';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
@Injectable({
    providedIn: 'root',
})
export class TutorialService {
    messagesUrl = 'http://localhost:8080/api/tutorials'

    constructor(
        private http: HttpClient
    ) { }

    getTutorial(): Observable<Tutorial[]> {
        return this.http.get<Tutorial[]>(this.messagesUrl);
    }
}