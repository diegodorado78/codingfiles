import { Component, OnInit} from '@angular/core';
import {DieService} from '@services/die.service';
import { Dates } from '@models/date.model';

import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {
public chartTitle="Adapter 2";
dieData:any;
dieData2:any=[];
data1:any;
data2:any;
data3:any;
chart:any
myChart: any;
enableState:boolean;
stateMessage:String;
enableButton:any;
dieDataSource$:any
selectedDates:Dates;
private unsubscribe$ = new Subject<void>();

  constructor(private dieService:DieService) {
    this.dieData=this.dieService.getFilteredDataset().pipe(
      tap(dataPoint=>{return dataPoint})
    ).subscribe(dataPoint=>this.dieData2.push(dataPoint));
    this.data1 =this.dieData2[0].map(film=>{return film.rollId});
    this.data2 =this.dieData2[0].map(film=>{return film.setPoint1});
    this.data3 =this.dieData2[0].map(film=>{return film.controller2});

  }

  ngOnInit():void {
    Chart.register(...registerables);
    this.myChart=document.getElementById('chart2');
    this.enableButton=document.getElementById('enableButton2')
    this.chart= new Chart(this.myChart,{
      type: 'line',
      data: {
          labels: this.data1 ,
          datasets: [
              {
              label: 'Set Point 1',
              data: this.data2,
              borderColor: 'rgba(34,139,34, 1)',
              borderWidth:3,
              tension: 0.5,
              pointRadius:2,
              pointBorderColor:'rgba(34,139,34, 1)'
              },
              {
                label: 'Controller 2',
                data: this.data3,
                borderColor: 'rgba(0, 0, 220, 0.7)',
                borderWidth: 3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'rgba(0, 0, 220, 0.7)'
                }
              ]
     },
      options:{
        responsive:true,
        maintainAspectRatio:false,

        scales:{
          y:{
            beginAtZero:true,
            ticks:{
              font:{
                size:10
              }
            }
          },
          x:{
            ticks:{
              font:{
                size:10
              }
            }
          },
        },
        plugins:{
          legend: {
            labels: {
                font: {
                    size: 10
                }
            }
        },
          zoom:{
            zoom: {
              wheel: {
                enabled: false,
              },
              pinch: {
                enabled: false
              },
              mode: 'xy',
            },
            pan:{
              enabled:true
            },
          }
        }
      },
    })
     this.setState()
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  resetZoom(){
   this.chart.resetZoom();
  }


  setState(){
  this.enableState=this.chart.options.plugins.zoom.zoom.wheel.enabled;
     if(this.enableState){
    return this.stateMessage="On"
       }else{
    return this.stateMessage="Off";}
       }

  enableZoom(){
    this.chart.options.plugins.zoom.zoom.wheel.enabled = !this.chart.options.plugins.zoom.zoom.wheel.enabled;
    this.setState();
    this.chart.update();
  }



}
