import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  constructor(private http: HttpClient) { }

  getPubicEvents(username: string) {
    return this.http.get(`${process.env['API_URL']}${username}`)
  }
}
