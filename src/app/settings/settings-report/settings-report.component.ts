import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from './event';
import { SettingsReportService } from './settings-report.service';

@Component({
  selector: 'app-settings-report',
  templateUrl: './settings-report.component.html',
  styleUrls: ['./settings-report.component.scss']
})
export class SettingsReportComponent implements OnInit {
  get events(): Event[] {
    const events = this.SettingsReportService.events;

    return events;
  }
  constructor(private SettingsReportService: SettingsReportService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  share() {
    window.alert("El reporte ha sido creado exitosamente");
  }
}
