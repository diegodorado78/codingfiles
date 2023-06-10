import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { TitleService} from './../core/services/title.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  subscription: Subscription;
  constructor(private titleService:TitleService) { }

  ngOnInit(): void {
  }

  setTitle(titleInput:string) {
    this.titleService.setTitle(titleInput)
  }
}
