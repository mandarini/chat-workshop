import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() userAuth: string;
  @Input() chatMsg: string;
  messages: Observable<any[]>;

  constructor(private db: AngularFirestore, private msgService: AppService) {

  }

  ngOnInit() {
    this.messages = this.db.collection("messages").valueChanges();
  }

  sendMsg(msg) {
    if (msg !== null) {
      console.log(msg);
      let message = {
        msg: msg,
        user: this.userAuth
      };
      this.msgService.addMsg(message);
    }
  }

}
