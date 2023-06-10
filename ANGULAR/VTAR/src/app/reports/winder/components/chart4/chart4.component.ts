import { Component, OnInit} from '@angular/core';
import { WinderService } from '@services/winder.service';
// import {WResponse} from '../../../../models/winderResponse.model'
import { Dates } from '@models/date.model';

import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.scss']
})
export class Chart4Component implements OnInit {
  chartTitle='Contact Winding';
  winderData:any;
  winderData2:any=[];
  dataId:any;
  data1_1:any;
  data2_1:any;
  data1_2:any;
  data2_2:any;
  chart:any
  myChart: any;
  enableState:boolean;
  stateMessage:String;
  enableButton:any;
  selectedDates:Dates;
  private unsubscribe$ = new Subject<void>();

    constructor(private winderService:WinderService) {
    this.winderData = this.winderService.getFilteredDataset().pipe(
        tap(dataPoint=>{return dataPoint})
      ).subscribe(dataPoint=>this.winderData2.push(dataPoint));

      this.dataId =this.winderData2[0][2].map(film=>{return film.rollId});
      this.data1_1 =this.winderData2[0][2].map(film=>{return film.w1TensionP1});
      this.data2_1 =this.winderData2[0][2].map(film=>{return film.w2TensionP1});
      this.data1_2 =this.winderData2[0][2].map(film=>{return film.w1TensionP2});
      this.data2_2 =this.winderData2[0][2].map(film=>{return film.w2TensionP2});
    }

    ngOnInit():void {
      Chart.register(...registerables);
      this.myChart=document.getElementById('chart4');
      this.enableButton=document.getElementById('enableButton4')
      this.chart= new Chart(this.myChart,{
        type: 'line',
        data: {
            labels: this.dataId ,
            datasets: [
                {
                label: 'w1TensionP1',
                data: this.data1_1,
                borderColor: 'DarkOrange',
                borderWidth: 3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'DarkOrange'
                },
                {
                label: 'w2TensionP1',
                data: this.data2_1,
                borderColor:'#675bb6',
                borderWidth: 3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'#675bb6'
                },
                {
                  label: 'w1TensionP2',
                  data: this.data1_2,
                  borderColor:'#a2333c',
                  borderWidth: 3,
                  tension: 0.5,
                  pointRadius:2,
                  pointBorderColor:'#a2333c'
                  },
                  {
                    label: 'w2TensionP2',
                    data: this.data2_2,
                    borderColor:'#007F5C',
                    borderWidth: 3,
                    tension: 0.5,
                    pointRadius:2,
                    pointBorderColor:'#007F5C'
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
    resetZoom(){
     this.chart.resetZoom();
    }
    ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }

    setState(){
    this.enableState=this.chart.options.plugins.zoom.zoom.wheel.enabled;
    if(this.enableState){
      return this.stateMessage="On"
    }else{
      return this.stateMessage="Off";
    }
    }

    enableZoom(){
      this.chart.options.plugins.zoom.zoom.wheel.enabled = !this.chart.options.plugins.zoom.zoom.wheel.enabled;
      this.setState();
      this.chart.update();
    }


}
