import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Message } from '../app.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('msgContainer') private messagesContainer: ElementRef;

  @Input() userAuth: string;
  messages: Observable<Message[]>;
  private msgRef: AngularFirestoreCollection<Message>;

  constructor(private db: AngularFirestore) {
    this.msgRef = db.collection<Message>('messages', ref => ref.orderBy('timestamp'));
  }

  ngOnInit() {
    this.messages = this.msgRef.valueChanges();
    this.scrollToBottom();
  }

   ngAfterViewChecked() {
       this.scrollToBottom();
   }

   scrollToBottom(): void {
       try {
           this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
       } catch(err) { }
   }

}
