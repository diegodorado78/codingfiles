import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LineInfoComponent } from './components/line-info/line-info.component';
import { CoreModule } from '../core/core.module';
import { NotificationsDialogComponent } from './components/notifications-dialog/notifications-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    LineInfoComponent,
    NotificationsDialogComponent
    ],
  exports:[
    HeaderComponent,
    NavBarComponent,
    LineInfoComponent,
    NotificationsDialogComponent
  ],
   imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CoreModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
