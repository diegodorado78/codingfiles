import { Component, OnInit,ViewChild} from '@angular/core';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('drawer')div:any;
  showMenu=false;
  showFiller:boolean=false;
  drawer:any=false;
   constructor() {}

    ngOnInit(): void {
     console.log("componente inciado");

   };
   toggleMenufromLayout(event){
    this.showMenu= event;
    this.div.toggle()
   }

    }




