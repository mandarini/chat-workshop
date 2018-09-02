import { Injectable } from '@angular/core';
import { Message } from "./app.model";
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  messages: AngularFirestoreCollection<Message>;
  private msgDoc: AngularFirestoreDocument<Message>;

  constructor(private db: AngularFirestore) {
     this.messages = db.collection<Message>("messages");
  }

  addMsg(msg) {
    this.messages.add(msg);
  }
}
