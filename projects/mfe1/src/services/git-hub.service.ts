import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  constructor(private http: HttpClient) { }

  getPubicEvents(username: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('user-token')}` });
    return this.http.get(`${process.env['API_URL']}${username}`,{ headers: headers });
  }
}
