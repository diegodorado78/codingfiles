import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
 private title=new BehaviorSubject('');
 currentTitle$= this.title.asObservable();
  constructor() { }

  setTitle(message:string){
  this.title.next(message)
  }
 
}
