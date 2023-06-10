import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KpiChartComponent } from './components/kpi-chart/kpi-chart.component';
import { KpisComponent } from './kpis.component';

const routes: Routes = [
  {
    path: '',
    component: KpisComponent
  },
  {
    path: ':id',
    component: KpiChartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class KpisRoutingModule {}