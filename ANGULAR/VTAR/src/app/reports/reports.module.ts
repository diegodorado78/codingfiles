import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [
    ReportsComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule,
    MaterialModule,
    RouterModule,
    CoreModule
  ],
  exports:[ReportsComponent,],
})
export class ReportsModule { }
