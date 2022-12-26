import { Component, HostListener } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe1';
  username = '';
  data: any = [];
  loading = false;

  constructor(private githubService: GitHubService) {
    
  }

  @HostListener('window:getSearchTerm', ['$event'])
  getUsername(ev:CustomEvent) {
    this.username = ev.detail;
    this.data = []
    if(this.username) {
      this.loading = true;
      this.githubService.getPubicEvents(this.username).subscribe(data => {
        this.loading = false
        this.data = data
      }, error => {
        this.loading = false
        this.data = []
      });
    }else {
      this.data = []
    }
  }

  ngOnInit(){
    
  }
}
