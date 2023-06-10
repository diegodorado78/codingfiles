import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DieService {
  dieData2=[{"rollId":"0A16022203","date":"2020/10/15","setPoint1":1, "controller3":0,"controller2":138,"controller":0,"setpoint2_3":120,"actual":59.4}];
  dieData3=[{"rollId":"0A16022204","date":"2020/10/15","setPoint1":0.45, "controller3":0,"controller2":138,"controller":0,"setpoint2_3":120,"actual":59.4}];
  dieData=[
{"rollId":"0A16022216","date":"2022/06/01","setPoint1":220, "controller3":0,"controller2":138,"controller":0,"setpoint2_3":120,"actual":59.4,},
{"rollId":"0A16022217","date":"2022/06/02","setPoint1":220, "controller3":5,"controller2":138,"controller":0,"setpoint2_3":120,"actual":61.4,},
{"rollId":"0A16022219","date":"2022/06/03","setPoint1":220, "controller3":10,"controller2":138,"controller":0,"setpoint2_3":120,"actual":50,},
{"rollId":"0A16022223","date":"2022/06/04","setPoint1":220, "controller3":0,"controller2":138,"controller":0,"setpoint2_3":120,"actual":60.6,},
{"rollId":"0A16022303","date":"2022/06/05","setPoint1":220, "controller3":0,"controller2":139,"controller":0,"setpoint2_3":120,"actual":56.5,},
{"rollId":"0A16022315","date":"2022/06/06","setPoint1":220, "controller3":113,"controller2":138,"controller":0,"setpoint2_3":120,"actual":63.8,},
{"rollId":"0A16022321","date":"2022/06/07","setPoint1":220, "controller3":113,"controller2":138,"controller":0,"setpoint2_3":120,"actual":50.1,},
{"rollId":"0A16022402","date":"2022/06/09","setPoint1":220, "controller3":120,"controller2":140,"controller":0,"setpoint2_3":120,"actual":52.3,},
{"rollId":"0A16022409","date":"2022/06/10","setPoint1":220, "controller3":120,"controller2":139,"controller":0,"setpoint2_3":120,"actual":61.3,},
{"rollId":"0A16022410","date":"2022/06/11","setPoint1":220, "controller3":113,"controller2":137,"controller":0,"setpoint2_3":120,"actual":77.5,},
{"rollId":"0A16022411","date":"2022/06/12","setPoint1":220, "controller3":113,"controller2":138,"controller":0,"setpoint2_3":120,"actual":62.9,},
{"rollId":"0A16022424","date":"2022/06/13","setPoint1":220, "controller3":0,"controller2":136,"controller":0,"setpoint2_3":120,"actual":62.5,},
{"rollId":"0A16022508","date":"2022/06/14","setPoint1":220, "controller3":111,"controller2":137,"controller":0,"setpoint2_3":120,"actual":61.3,},
{"rollId":"0A16022514","date":"2022/06/15","setPoint1":220, "controller3":0,"controller2":135,"controller":0,"setpoint2_3":120,"actual":63.2,},
{"rollId":"0A16042409","date":"2022/06/16","setPoint1":200, "controller3":0,"controller2":142,"controller":100,"setpoint2_3":120,"actual":51.6,},
{"rollId":"0A16042412","date":"2022/06/17","setPoint1":200, "controller3":0,"controller2":141,"controller":100,"setpoint2_3":120,"actual":54.6,},
{"rollId":"0A16042414","date":"2022/06/18","setPoint1":200, "controller3":67,"controller2":141,"controller":100,"setpoint2_3":120,"actual":52.9,},
{"rollId":"0A16042417","date":"2022/06/19","setPoint1":200, "controller3":67,"controller2":141,"controller":100,"setpoint2_3":120,"actual":55.8,},
{"rollId":"0A16042423","date":"2022/06/20","setPoint1":200, "controller3":62,"controller2":141,"controller":100,"setpoint2_3":120,"actual":59.1,},
{"rollId":"0A16042501","date":"2022/06/21","setPoint1":200, "controller3":64,"controller2":142,"controller":100,"setpoint2_3":120,"actual":60.9,},
{"rollId":"0A16042506","date":"2022/06/22","setPoint1":200, "controller3":66,"controller2":143,"controller":100,"setpoint2_3":120,"actual":61.1,},
{"rollId":"0A16042513","date":"2022/06/23","setPoint1":200, "controller3":66,"controller2":142,"controller":100,"setpoint2_3":120,"actual":68.8,},
{"rollId":"0A16042517","date":"2022/06/24","setPoint1":200, "controller3":55,"controller2":144,"controller":100,"setpoint2_3":120,"actual":61,},
{"rollId":"0A16042519","date":"2022/06/25","setPoint1":200, "controller3":115,"controller2":140,"controller":100,"setpoint2_3":120,"actual":61.7,},
{"rollId":"0A16061016","date":"2022/06/26","setPoint1":200, "controller3":115,"controller2":140,"controller":100,"setpoint2_3":120,"actual":73,},
{"rollId":"0A16061018","date":"2022/06/27","setPoint1":200, "controller3":115,"controller2":134,"controller":100,"setpoint2_3":120,"actual":48.9,},
{"rollId":"0A16061023","date":"2022/06/28","setPoint1":220, "controller3":115,"controller2":131,"controller":100,"setpoint2_3":120,"actual":52.9,},
{"rollId":"0A16061102","date":"2022/06/29","setPoint1":220, "controller3":116,"controller2":139,"controller":52,"setpoint2_3":120,"actual":48.4,},
{"rollId":"0A16061107","date":"2022/06/30","setPoint1":220, "controller3":116,"controller2":139,"controller":100,"setpoint2_3":120,"actual":39.8,},
{"rollId":"0A16061111","date":"2022/06/29","setPoint1":220, "controller3":116,"controller2":138,"controller":100,"setpoint2_3":120,"actual":40.9,},
{"rollId":"0A16061115","date":"2022/06/29","setPoint1":220, "controller3":116,"controller2":138,"controller":82,"setpoint2_3":120,"actual":44.9,},
 ]
   private dataSource= new BehaviorSubject({});
   dataSource$=this.dataSource.asObservable();

  constructor() { }

  public addDataSet(data:any){
    this.dataSource.next(data)
  }
  getFilteredDataset(){
    return this.dataSource$
  }
  getAllDataPoints(){
    return this.dieData;
  }
  getSomeDataPoints(){
    return this.dieData2;
  }
  getSomeDataPoints2(){
    return this.dieData3;
  }
  getDataPoint(id:string){
    return this.dieData.find(item=>id=== item.rollId);
  }
}
