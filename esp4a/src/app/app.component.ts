import { Component, OnInit } from '@angular/core';
import { getParentRenderElement } from '@angular/core/src/view/util';
import { EspService } from '../services/esp.service';
import { AppModule } from './app.module';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireDatabase} from 'angularfire2/database';
import {Chart} from 'chart.js';




@Component({
  selector: 'app-root',
  templateUrl: './grafica/grafica.component.html',
  styleUrls: ['./grafica/grafica.component.css']
  
})


export class AppComponent implements OnInit{
  constructor(public afDB: AngularFireDatabase){}
  
  ngOnInit() {
    var esp=new EspService(this.afDB);
    esp.grafica();
   
  };
 
}



