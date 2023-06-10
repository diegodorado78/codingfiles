import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinderComponent } from './components/winder/winder.component';
import { WinderRoutingModule } from './winder-routing.module';
import { Chart2Component } from './components/chart2/chart2.component';
import { Chart1Component } from './components/chart1/chart1.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { Chart3Component } from './components/chart3/chart3.component';
import { Chart4Component } from './components/chart4/chart4.component';
@NgModule({
  declarations: [
   WinderComponent,
   Chart2Component,
   Chart1Component,
   Chart3Component,
   Chart4Component
  ],

  imports: [
        CommonModule,
        SharedModule,
        WinderRoutingModule,
        MaterialModule
  ],
})
export class WinderModule { }
