import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtrusorService {
  private dataSource= new BehaviorSubject({});
   dataSource$=this.dataSource.asObservable();

  private extrusorData=[
    {"rollId":"0A16221602","date":"2022/06/01","setPointHeating":245,"meltTempetaruteActual":256.4,"drives":19,"setPoint":220,"actual":1.9,},
    {"rollId":"0A16221748","date":"2022/06/02","setPointHeating":245,"meltTempetaruteActual":256.5,"drives":19,"setPoint":220,"actual":1.9,},
    {"rollId":"0A16221603","date":"2022/06/03","setPointHeating":245,"meltTempetaruteActual":256.4,"drives":19,"setPoint":220,"actual":1.9,},
    {"rollId":"0A16221747","date":"2022/06/04","setPointHeating":245,"meltTempetaruteActual":256.5,"drives":19,"setPoint":220,"actual":1.9,},
    {"rollId":"0A16221603","date":"2022/06/05","setPointHeating":245,"meltTempetaruteActual":256.4,"drives":19,"setPoint":220,"actual":1.9,},
    {"rollId":"0A16221749","date":"2022/06/06","setPointHeating":245,"meltTempetaruteActual":256.5,"drives":19,"setPoint":220,"actual":1.9,},
    {"rollId":"0A16250643","date":"2022/06/19","setPointHeating":245,"meltTempetaruteActual":306.6,"drives":21,"setPoint":230,"actual":2.1,},
    {"rollId":"0A16251351","date":"2022/06/20","setPointHeating":245,"meltTempetaruteActual":297-8,"drives":21,"setPoint":230,"actual":2,},
    {"rollId":"0A16251719","date":"2022/06/21","setPointHeating":245,"meltTempetaruteActual":297,"drives":21,"setPoint":230,"actual":2},
    {"rollId":"0A16251904","date":"2022/06/22","setPointHeating":240,"meltTempetaruteActual":325.7,"drives":21,"setPoint":230,"actual":2,},
    {"rollId":"0A16101615","date":"2022/06/23","setPointHeating":240,"meltTempetaruteActual":395.9,"drives":21,"setPoint":230,"actual":2},
    {"rollId":"0A16101822","date":"2022/06/24","setPointHeating":240,"meltTempetaruteActual":297.2,"drives":21,"setPoint":230,"actual":2,},
    {"rollId":"0A16102326","date":"2022/06/25","setPointHeating":240,"meltTempetaruteActual":309.7,"drives":21,"setPoint":230,"actual":2,},
    {"rollId":"0A16110251","date":"2022/06/26","setPointHeating":240,"meltTempetaruteActual":296.8,"drives":21,"setPoint":220,"actual":2,},
    {"rollId":"0A16110733","date":"2022/06/27","setPointHeating":240,"meltTempetaruteActual":290,"drives":21,"setPoint":220,"actual":2,},
    {"rollId":"0A16111154","date":"2022/06/28","setPointHeating":240,"meltTempetaruteActual":298,"drives":21,"setPoint":220,"actual":2,},
    {"rollId":"0A16111514","date":"2022/06/29","setPointHeating":240,"meltTempetaruteActual":299,"drives":21,"setPoint":220,"actual":2,},
    ];

  private mainExtrusorData=[
    {"rollId":"0A16221603","date":"2022/06/01","setPointRpm":245,"meteringExtruderOulet":117.7,"setPoint":227,"actual":137,},
    {"rollId":"0A16221748","date":"2022/06/02","setPointRpm":245,"meteringExtruderOulet":107.9,"setPoint":227,"actual":137.1,},
    {"rollId":"0A16221932","date":"2022/06/03","setPointRpm":245,"meteringExtruderOulet":117.9,"setPoint":227,"actual":137},
    {"rollId":"0A16222327","date":"2022/06/04","setPointRpm":245,"meteringExtruderOulet":107.6,"setPoint":227,"actual":137,},
    {"rollId":"0A16230334","date":"2022/06/05","setPointRpm":235,"meteringExtruderOulet":118.2,"setPoint":227,"actual":137.1,},
    {"rollId":"0A16231554","date":"2022/06/06","setPointRpm":235,"meteringExtruderOulet":107.7,"setPoint":227,"actual":137.1,},
    {"rollId":"0A16232120","date":"2022/06/07","setPointRpm":235,"meteringExtruderOulet":117.8,"setPoint":227,"actual":135.6,},
    {"rollId":"0A16240211","date":"2022/06/08","setPointRpm":235,"meteringExtruderOulet":108.3,"setPoint":227,"actual":136.4,},
    {"rollId":"0A16240918","date":"2022/06/09","setPointRpm":235,"meteringExtruderOulet":118.2,"setPoint":227,"actual":137,},
    {"rollId":"0A16241019","date":"2022/06/10","setPointRpm":235,"meteringExtruderOulet":107.8,"setPoint":227,"actual":137.1,},
    {"rollId":"0A16241140","date":"2022/06/11","setPointRpm":245,"meteringExtruderOulet":118.1,"setPoint":227,"actual":136.9,},
    {"rollId":"0A16242455","date":"2022/06/12","setPointRpm":245,"meteringExtruderOulet":108.5,"setPoint":227,"actual":137.3,},
    {"rollId":"0A16250854","date":"2022/06/13","setPointRpm":245,"meteringExtruderOulet":118.1,"setPoint":227,"actual":137,},
    {"rollId":"0A16251419","date":"2022/06/14","setPointRpm":245,"meteringExtruderOulet":108.5,"setPoint":227,"actual":137.1,},
    {"rollId":"0A16240933","date":"2022/06/15","setPointRpm":245,"meteringExtruderOulet":118.1,"setPoint":227,"actual":137.1,},
    {"rollId":"0A16241245","date":"2022/06/16","setPointRpm":245,"meteringExtruderOulet":108.4,"setPoint":227,"actual":137,},
    {"rollId":"0A16241404","date":"2022/06/17","setPointRpm":245,"meteringExtruderOulet":118.3,"setPoint":227,"actual":137,},
    {"rollId":"0A16241701","date":"2022/06/18","setPointRpm":245,"meteringExtruderOulet":108.2,"setPoint":227,"actual":137,},
    {"rollId":"0A16242329","date":"2022/06/19","setPointRpm":245,"meteringExtruderOulet":117.7,"setPoint":227,"actual":137,},
    {"rollId":"0A16250142","date":"2022/06/20","setPointRpm":245,"meteringExtruderOulet":107.7,"setPoint":227,"actual":136.9,},
    {"rollId":"0A16250643","date":"2022/06/21","setPointRpm":245,"meteringExtruderOulet":117.8,"setPoint":227,"actual":137,},
    {"rollId":"0A16251351","date":"2022/06/22","setPointRpm":245,"meteringExtruderOulet":108.1,"setPoint":227,"actual":137},
    {"rollId":"0A16251719","date":"2022/06/23","setPointRpm":245,"meteringExtruderOulet":118.5,"setPoint":227,"actual":137},
    {"rollId":"0A16251904","date":"2022/06/24","setPointRpm":240,"meteringExtruderOulet":108.1,"setPoint":227,"actual":136.2,},
    {"rollId":"0A16101615","date":"2022/06/25","setPointRpm":240,"meteringExtruderOulet":118.4,"setPoint":227,"actual":137.8},
    {"rollId":"0A16101822","date":"2022/06/26","setPointRpm":240,"meteringExtruderOulet":108.3,"setPoint":227,"actual":137,},
    {"rollId":"0A16102326","date":"2022/06/27","setPointRpm":240,"meteringExtruderOulet":118.2,"setPoint":227,"actual":137,},
    {"rollId":"0A16110251","date":"2022/06/28","setPointRpm":240,"meteringExtruderOulet":108.4,"setPoint":227,"actual":137,},
    {"rollId":"0A16110733","date":"2022/06/29","setPointRpm":240,"meteringExtruderOulet":118.5,"setPoint":227,"actual":137,},
    {"rollId":"0A16111154","date":"2022/06/30","setPointRpm":240,"meteringExtruderOulet":107.2,"setPoint":227,"actual":137,},
]

  constructor() { }
  getAllDataPoints(){
    return this.extrusorData;
  }
  getFilteredDataset(){
    return this.dataSource$
  }
  getAllDataPointsMain(){
    return this.mainExtrusorData;
  }
  getDataPoint(id:string){
    return this.extrusorData.find(item=>id=== item.rollId);  }

  addDataSet(data:any){
    this.dataSource.next(data)

  }
}
