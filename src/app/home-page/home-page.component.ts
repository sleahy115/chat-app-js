import { Component, OnInit } from '@angular/core';
import {AF} from "./../providers/af";
import {FirebaseListObservable} from "angularfire2";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public newMessage:string;
  public messages:FirebaseListObservable<any>;

  constructor(public afService:AF) {
    this.messages = this.afService.messages;
  }

  isYou(email){
    if(email == this.afService.email) {
      return true;
    }else {
      return false;
    }
  }

  isMe(email) {
    if(email == this.afService.email) {
      return false;
    } else {
      return true;
    }
  }

  sendMessage() {
    console.log(this.messages);
    this.afService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  ngOnInit() {
  }

}
