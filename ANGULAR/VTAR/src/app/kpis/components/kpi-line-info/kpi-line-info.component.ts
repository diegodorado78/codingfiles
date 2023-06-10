import {Component,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-kpi-line-info',
  templateUrl: './kpi-line-info.component.html',
  styleUrls: ['./kpi-line-info.component.scss']
})
export class KpiLineInfoComponent implements OnInit {
@Input() line= Input(); // para resolver problema de strict mode

  ngOnInit(): void {
     }

}
