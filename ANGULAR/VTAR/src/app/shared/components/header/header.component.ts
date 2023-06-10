import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsDialogComponent } from '../notifications-dialog/notifications-dialog.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() newToggleEvent = new EventEmitter<boolean>();
  bcoLogo: string = '../../../../assets/images/bco-logo-white.png'
  notification: number = 0;
  showMenu: boolean = false;
  subscription: Subscription;
  titleService: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(NotificationsDialogComponent);
  }
  toggleMenu(state: boolean) {
    this.showMenu = !state;
    this.newToggleEvent.emit(this.showMenu)
  }


}
