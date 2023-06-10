import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DieComponent } from './components/die/die..component';
import {DieRoutingModule } from './die-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { Chart1Component } from './components/chart1/chart1.component';
import { Chart2Component } from './components/chart2/chart2.component';
import { Chart3Component } from './components/chart3/chart3.component';


@NgModule({
  declarations: [DieComponent, Chart1Component, Chart2Component, Chart3Component],
  imports: [
    CommonModule,
    DieRoutingModule,
    SharedModule,
  MaterialModule],
  exports:[
    DieComponent
  ]
})
export class DieModule { }
