import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(
    public authService: AuthService,
    public router: Router,
  ) {}

  logout () {
    this.authService.isLoggedIn = false;
    this.router.navigateByUrl('');
  }
}
