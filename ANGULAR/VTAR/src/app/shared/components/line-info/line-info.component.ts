import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { LinesService } from 'src/app/core/services/lines.service';

@Component({
  selector: 'app-line-info',
  templateUrl: './line-info.component.html',
  styleUrls: ['./line-info.component.scss']
})

export class LineInfoComponent implements OnInit {
  line:any = {};
    constructor( 
    private linesService: LinesService,
    // public router:Router,
     private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id; // guardo el id que pasamos como param para usarlo en el metodo
      this.line = this.linesService.getLine(id); // as product x indicar el tipo de resp que espero al llamar al service
      // llamo al metodo get product del service
  });
  }
}
