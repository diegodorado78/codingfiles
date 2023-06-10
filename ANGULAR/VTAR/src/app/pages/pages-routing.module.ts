 import {NgModule} from '@angular/core';
 import {Routes, RouterModule } from '@angular/router';
import { KpisComponent } from '../kpis/kpis.component';
 import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from '../reports/reports.component';
 
const routes: Routes = [
 {
  path: '',
  component: HomeComponent
 },
 {
  path: 'kpis',
  component: KpisComponent,
  loadChildren: () => import('../kpis/kpis.module').then(m => m.KpisModule)

 },
 {
  path: 'reports',
  component: ReportsComponent,
  loadChildren: () => import('../reports/reports.module').then(m => m.ReportsModule)
 },

];
 @NgModule({
imports: [
 RouterModule.forChild(routes), 
],
exports: [
 RouterModule 
]
 })
 export class PagesRoutingModule{}