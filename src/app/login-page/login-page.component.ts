import { Component, OnInit } from '@angular/core';
import {AF} from "../providers/af";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AF]
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router, public afService:AF) { }

  login() {
  this.afService.loginWithGoogle().then((data) => {
    // Send them to the homepage if they are logged in
    this.router.navigate(['']);
  })
}


  ngOnInit() {
  }

}
