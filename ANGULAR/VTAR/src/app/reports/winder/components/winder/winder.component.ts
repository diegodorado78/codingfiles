import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs'
import {Response} from '@models/response.model' ;
import { WinderService } from 'src/app/core/services/winder.service';
import {WResponse} from '@models/winderResponse.model'


@Component({
  selector: 'app-winder',
  templateUrl: './winder.component.html',
  styleUrls: ['./winder.component.scss']
})
export class WinderComponent implements OnInit {
  filmTensionData:Response[]=[];
  tensionControlData:Response[]=[];
  gapWindingData:WResponse[]=[];
  contactWindingData:WResponse[]=[];


constructor(private winderService:WinderService){}
ngOnInit(){

}

}

