import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ChatComponent } from './chat/chat.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatComponent,
    InputComponent,
    HomeComponent,
    UsersComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
