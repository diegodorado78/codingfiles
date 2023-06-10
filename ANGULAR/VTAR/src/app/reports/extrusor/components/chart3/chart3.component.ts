import { Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {ExtrusorService} from '@services/extrusor.service';
import { Dates } from '@models/date.model';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class Chart3Component implements OnInit {
  public chartTitle="Main Extrusor";
  extrusorData:any;
  extrusorData2:any=[];
  data1:any;
  data2:any;
  data3:any;
  chart:any
  data4:any;
  myChart: any;
  enableState:boolean;
  stateMessage:String;
  enableButton:any;
  selectedDates:Dates;
  private unsubscribe$ = new Subject<void>();

    constructor(private extrusorService:ExtrusorService) {
      this.extrusorData = this.extrusorService.getFilteredDataset().pipe(
        tap(x=>{return x})
      ).subscribe(x=>this.extrusorData2.push(x));
      this.data1 =this.extrusorData2[0][1].map(film=>{return film.rollId});
      this.data2 =this.extrusorData2[0][1].map(film=>{return film.setPointRpm});
      this.data3 =this.extrusorData2[0][1].map(film=>{return film.setPoint});
      this.data4 =this.extrusorData2[0][1].map(film=>{return film.actual});
    }

    ngOnInit():void {
      Chart.register(...registerables);
      this.myChart=document.getElementById('chart3');
      this.enableButton=document.getElementById('enableButton3')
      this.chart= new Chart(this.myChart,{
        type: 'line',
        data: {
            labels: this.data1 ,
            datasets: [
                {
                label: 'Setpoint Rpm',
                data: this.data2,
                borderColor: 'rgb(84, 192, 84)',
                borderWidth:3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'rgb(84, 192, 84)'
                },
                {
                  label: 'Setpoint',
                  data: this.data3,
                  borderColor: 'DarkMagenta',
                  borderWidth: 3,
                  tension: 0.5,
                  pointRadius:2,
                  pointBorderColor:'DarkMagenta'
                  },
                {
                    label: 'Actual',
                    data: this.data4,
                    borderColor: ' #128385',
                    borderWidth: 3,
                    tension: 0.5,
                    pointRadius:2,
                    pointBorderColor:' #128385'
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
      return this.stateMessage="Off"; }
    }

    enableZoom(){
      this.chart.options.plugins.zoom.zoom.wheel.enabled = !this.chart.options.plugins.zoom.zoom.wheel.enabled;
      this.setState();
      this.chart.update();
    }
}
