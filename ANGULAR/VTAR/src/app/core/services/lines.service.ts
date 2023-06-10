import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinesService {
private lines = [
{ //declaro que el array va a ser tipo products only
      id: '1',
      lineImage: '../../../assets/images/line.png',
      rollImage: '../../../assets/images/gRoll.png',
      productImage: '../../../assets/images/product.png',
      number: '#11',
      description: 'bla bla bla bla bla',

    },
    {
      id: '2',
      lineImage: '../../../assets/images/line.png',
      rollImage: '../../../assets/images/gRoll.png',
      productImage: '../../../assets/images/product.png',
      number: '#7',
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      lineImage: '../../../assets/images/line.png',
      rollImage: '../../../assets/images/gRoll.png',
      productImage: '../../../assets/images/product.png',
      number: '#5',
      description: 'bla bla bla bla bla'
    },
]

yieldData=[{
  totalYield:4215,
  actualYield:1270
},]

uptimeData=[{
  totalUptime:893,
  productionTime:892
}]
capacityData=[{
  normalOutput:6160,
  ouputWinder:4176
}]
  constructor() { }

   getAllLines(){
    return this.lines;
  }
  getLine(id:string){
    return this.lines.find(item=>id=== item.id);
  }
  getYieldData(){
    return this.yieldData
  }
  getUptimeData(){
    return this.uptimeData
  }
  getCapacityData(){
    return this.capacityData
  }

}
