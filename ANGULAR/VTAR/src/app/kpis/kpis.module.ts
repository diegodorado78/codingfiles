import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KpisComponent} from './kpis.component'
import { KpiChartComponent } from './components/kpi-chart/kpi-chart.component';
import { KpiLineInfoComponent } from './components/kpi-line-info/kpi-line-info.component';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { KpisRoutingModule } from './kpis-routing.module';

@NgModule({
  declarations: [
    KpisComponent, KpiChartComponent,KpiLineInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CoreModule,
    KpisRoutingModule
  ],
  exports:[
    KpiLineInfoComponent
  ]
})
export class KpisModule { }
