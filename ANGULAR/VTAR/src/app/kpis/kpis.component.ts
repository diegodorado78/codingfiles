import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {LinesService} from '@services/lines.service';
@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',
  styleUrls: ['./kpis.component.scss']
})
export class KpisComponent implements OnInit {
 lines =[];
@Input() line:any = Input();
@Output() lineClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private linesService: LinesService) { }
 clickLine(id: Event){
  }
  ngOnInit(): void {
     this.lines = this.linesService.getAllLines();
  }
}
