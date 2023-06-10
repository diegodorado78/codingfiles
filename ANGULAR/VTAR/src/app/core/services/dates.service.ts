import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dates } from '@models/date.model';
 @Injectable({
  providedIn: 'root'
})

export class DatesService {

  constructor() { }
  currentData:Dates={startDate:"1/6/2022",endDate:"15/6/2022"};
  private dateData= new BehaviorSubject<Dates>(this.currentData);
  dateData$=this.dateData.asObservable();
  dateDto:any;

  public addDate(data:Dates){
    this.dateData.next(data)
  }
}

