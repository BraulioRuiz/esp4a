import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { EspService } from '../services/esp.service';
import { LoginComponent } from './login/login.component';
import { GraficaComponent } from './grafica/grafica.component';

const config = {
  apiKey: "AIzaSyCUYMj_J04yZseGq0tdgCs7RHMSHTMwng8",
  authDomain: "asp4a-9caed.firebaseapp.com",
  databaseURL: "https://asp4a-9caed.firebaseio.com",
  projectId: "asp4a-9caed",
  storageBucket: "asp4a-9caed.appspot.com",
  messagingSenderId: "555167197539"
  };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [EspService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
