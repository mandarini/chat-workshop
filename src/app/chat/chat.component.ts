import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Message } from '../app.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() userAuth: string;
  @Input() chatMsg: string;
  messages: Observable<any[]>;
  private msgRef: AngularFirestoreCollection<Message>;

  constructor(private db: AngularFirestore, private msgService: AppService) {
    this.msgRef = db.collection<Message>('messages', ref => ref.orderBy('timestamp'));

  }

  ngOnInit() {
    this.messages = this.msgRef.valueChanges();
  }

  sendMsg(msg) {
    if (msg !== null) {
      let message = {
        msg: msg,
        user: this.userAuth,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };
      this.msgService.addMsg(message);
    }
  }

}
