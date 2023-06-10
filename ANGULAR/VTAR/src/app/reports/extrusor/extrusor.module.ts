import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExtrusorRoutingModule } from './extrusor-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ExtrusorComponent } from './components/extrusor/extrusor.component';
import { Chart1Component } from './components/chart1/chart1.component';
import { Chart2Component } from './components/chart2/chart2.component';
import { Chart3Component } from './components/chart3/chart3.component';
import { Chart4Component } from './components/chart4/chart4.component';



@NgModule({
  declarations: [ExtrusorComponent,  Chart1Component, Chart2Component, Chart3Component, Chart4Component],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ExtrusorRoutingModule
  ]
})
export class ExtrusorModule { }
