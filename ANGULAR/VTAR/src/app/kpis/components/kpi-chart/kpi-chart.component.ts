import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { LinesService } from '@services/lines.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-kpis',
  templateUrl: './kpi-chart.component.html',
  styleUrls: ['./kpi-chart.component.scss']
})
export class KpiChartComponent implements OnInit {
  yieldData:any;
  totalYield:number;
  actualYield:number;

  uptimeData:any;
  totalUptime:number;
  productionTime:number;

  capacityData:any;
  normalOutput:number;
  ouputWinder:number;

  dieData:any;
  dieData2:any;

  data1:any;
  data2:any;
  data3:any;

  myChart: any;
  chart:any;

line:any = {};
upLabel1:string='';
upLabel2:string='';
upLabel3:string='';

upUnid:string='';
upUnid2:string='';

downLabel1:string='';
downLabel2:string='';
downLabel3:string='';

downUnid:string='';
downUnid2:string='';

size:string=''
constructor( private route: ActivatedRoute, private linesService: LinesService){
  this.yieldData= this.linesService.getYieldData();
  this.totalYield= this.yieldData.map(line=>{return line.totalYield});
  this.actualYield= this.yieldData.map(line=>{return line.actualYield});

  this.uptimeData= this.linesService.getUptimeData();
  this.totalUptime= this.uptimeData.map(line=>{return line.totalUptime});
  this.productionTime= this.uptimeData.map(line=>{return line.productionTime});

  this.capacityData= this.linesService.getCapacityData();
  this.normalOutput= this.capacityData.map(line=>{return line.normalOutput});
  this.ouputWinder= this.capacityData.map(line=>{return line.ouputWinder});

}
  ngOnInit(): void {
    Chart.register(...registerables);

    this.route.params.subscribe((params: Params) => {
      const id = params.id; // guardo el id que pasamos como param para usarlo en el metodo
      // this.line = this.linesService.getLine(id); // as product x indicar el tipo de resp que espero al llamar al service
      // llamo al metodo get product del service
    });

    this.myChart=document.getElementById('chart1');
    this.chart= new Chart(this.myChart,{
      type: 'bar',
      data: {
          labels: ["Yield"] ,
          datasets: [
            {
              label: "Good Roll",
              data: [0],
              backgroundColor:'#008000',
              borderColor:'transparent',
              barPercentage: 1,
              borderWidth:3,
              },
              {
              label:'Total Material',
              data: [0],
              backgroundColor:'#91897c' ,
              borderColor:'grey',
              barPercentage: 1,
              borderWidth:3,
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
                size:12
              }
            },
            stacked:false,
            grid:{
              drawBorder:false,
              color:'transparent'
            }
          },

          x:{
            ticks:{
              font:{
                size:15
              }
            },
            stacked:true,
            grid:{
              drawBorder:false
            }

          },
        },
        plugins:{
          legend: {
            display:false,
            labels: {
                font: {
                    size: 10
                }
            }
        },
        }
      },
    })
    //  this.setState()

  }
  updateYield(actualYield,totalYield){
    this.chart.config.data.datasets[0].data[0]=actualYield;
    this.chart.config.data.datasets[1].data[0]=totalYield;
    this.chart.config.data.labels=['Yield']
    this.chart.update();
  }
  updateUptime(productionTime, totalUptime){
  this.chart.config.data.datasets[0].data[0]=productionTime;
  this.chart.config.data.datasets[1].data[0]=totalUptime;
  this.chart.config.data.labels=['Uptime']
  this.chart.update();
  }
  updateCapacity(ouputWinder,normalOutput){
  this.chart.config.data.datasets[0].data[0]=ouputWinder;
  this.chart.config.data.datasets[1].data[0]=normalOutput;
  this.chart.config.data.labels=['Capacity']
  this.chart.update();
  }
  }
