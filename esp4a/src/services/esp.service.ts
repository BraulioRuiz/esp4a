import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';
import {Chart} from 'chart.js';

@Injectable()
export class EspService{
    LineChart=[];

    constructor(public afDB: AngularFireDatabase){    

    }
    public alerta(){
        var valor;     

        const adRef=this.afDB.database.ref().child('Grafica');
        adRef.on('value', snap=>alert(valor=snap.val()));
    }
    public grafica(){
        
        this.LineChart = new Chart('lineChart',{
            type:'line',
            data:{
              labels:["dato1", "dato2", "dato3"],
              datasets:[{
                label:'numeros del elementos',
                data:[10,15,30],
                fill:false,
                lineTension:0.2,
                borderColor:"red",
                borderWidth:1
              }]
            },
            options:{
              title:{
                text:"lineas con chart",
                display:true
              },
              scales:{
                yAxes:[{
                  ticks:{
                    beginAtZero:true
                  }
                }]
              }
            }
          })
    }

    public ledOn(){
        return this.afDB.database.ref().child('LED_STATUS').set(1);
    }
    public ledOff(){
        return this.afDB.database.ref().child('LED_STATUS').set(0);

    } 
    
    
}