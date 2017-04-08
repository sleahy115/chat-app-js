import { Component } from '@angular/core';
import { AF } from "./providers/af";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AF]
})
export class AppComponent {
  title = 'app works!';
  public isLoggedIn:boolean;
  constructor(private router:Router, public afService:AF) {
    this.afService.af.auth.subscribe(
      (auth)=> {
        if(auth === null) {
          console.log(auth);
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        } else {
          console.log(auth)
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );
  }
  logout(){
    this.afService.logout();
  }
}
