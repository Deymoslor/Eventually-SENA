import { Component, Input, OnInit } from '@angular/core';
import { Event } from "./event";

@Component({
  selector: 'app-settings-report-show',
  templateUrl: './settings-report-show.component.html',
  styleUrls: ['./settings-report-show.component.scss']
})
export class SettingsReportShowComponent implements OnInit {
  @Input() event!: Event;
  constructor() { }

  ngOnInit(): void {
  }

}
