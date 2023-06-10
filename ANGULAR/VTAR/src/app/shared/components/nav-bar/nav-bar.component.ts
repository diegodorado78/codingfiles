import { Component, OnInit,Input } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { LinesService } from 'src/app/core/services/lines.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
@Input() line:any = Input();
  constructor(
    private _location: Location,
    public router:Router, 
    private linesService: LinesService,
    private route: ActivatedRoute,
    private location:Location,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id; // guardo el id que pasamos como param para usarlo en el metodo
      this.line = this.linesService.getLine(id); // as product x indicar el tipo de resp que espero al llamar al service
      // llamo al metodo get product del service
    }); //
  }
  goBack(){
    
    this._location.back();
  }
  iskpisRouteActivated():boolean{//method to check the end point
    //use the service to get the  line id put it as the end point to make it dinamic and check
    return this.location.path().indexOf('/kpis/',this.line) > -1;
  }
  isHomeActivated():boolean{//method to check the end point
    return this.location.path().indexOf('/home',) > -1;
  }
}
