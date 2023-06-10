import { Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { WinderService } from '@services/winder.service';
import { Dates } from '@models/date.model';

import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {
  public chartTitle="Tension Control";
  winderData:any;
  winderData2:any=[];
  data1:any;
  data2:any;
  data3:any;
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
      this.data1 =this.winderData2[0][0].map(film=>{return film.rollId});
      this.data2 =this.winderData2[0][0].map(film=>{return film.filmTension});
      this.data3 =this.winderData2[0][0].map(film=>{return film.actual});
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
                label: 'Film tension',
                data: this.data2,
                borderColor: 'rgba(34,139,34, 1)',
                borderWidth: 3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'rgba(34,139,34, 0.8)'
                },
                {
                label: 'Tension control',
                data: this.data3,
                borderColor:'rgba(0, 0, 120, 0.7)',
                borderWidth: 3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'rgba(0, 0, 139, 1)'
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
                  enabled:false,
                },
                pinch: {
                  enabled:false
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
