import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  constructor(){}

  LineChart=[];
  BarChart=[];

  ngOnInit() {
    this.LineChart = new Chart('lineChart',{
      type:'line',
      data:{
        labels:["Enero", "Febrero", "Marzo"],
        datasets:[{
          label:'numeros del elementos en meses',
          data:[9,7,3],
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
  };
  

}
