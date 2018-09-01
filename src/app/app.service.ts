import { Injectable } from '@angular/core';
import { Message } from "./app.model";
import { Injectable } from "@angular/core";
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import config from "app.config.js";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  messages: AngularFirestoreCollection<Message>;
  private msgDoc: AngularFirestoreDocument<Message>;

  constructor(private db: AngularFirestore) {
     //Get the tasks collection
     this.messages = db.collection<Message>(config.collection_endpoint);
  }

  sendMsg(msg) {
    this.messages.add(msg);
  }
}
