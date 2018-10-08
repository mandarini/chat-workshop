import { Injectable } from '@angular/core';
import { Message } from "./app.model";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  messages: AngularFirestoreCollection<Message>;

  constructor(private db: AngularFirestore) {
     this.messages = db.collection<Message>("messages");
  }

  addMsg(msg) {
    this.messages.add(msg);
  }
}
