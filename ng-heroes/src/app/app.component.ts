import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo heroes app, dude ...';
  routerUrl: string;
  
  constructor(private router: Router) { }
  
  
  setActivePage(routerUrl: string) {
    if(routerUrl === this.router.url) {
      return true;
    }
  }
}
