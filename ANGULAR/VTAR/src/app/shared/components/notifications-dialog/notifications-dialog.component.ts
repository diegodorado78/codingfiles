import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-dialog',
  templateUrl: './notifications-dialog.component.html',
  styleUrls: ['./notifications-dialog.component.scss']
})
export class NotificationsDialogComponent implements OnInit {
notifications:any=[
  {
    name:"0A1602221601",
    id:1,
    lineType:"PP",
    rollStatus:"Good"
  },
  {
    name:"0A1602221602",
    id:2,
    lineType:"PET",
    rollStatus:"bad"
  },
  {
    name:"0A1602221603",
    id:3,
    lineType:"PET",
    rollStatus:"Good"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
