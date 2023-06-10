import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations:
   [HomeComponent],
  imports: [
    CoreModule,
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class PagesModule { }
