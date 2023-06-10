 import {NgModule} from '@angular/core';
 import {Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { DatePickerComponent } from '../date-picker/date-picker.component';
 import { ExtrusorComponent } from './components/extrusor/extrusor.component';

 const routes: Routes = [
 {
  path: '',
  component: DatePickerComponent
 },
 {
    path: 'trends',
    component: ExtrusorComponent
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
 export class ExtrusorRoutingModule{
 };
