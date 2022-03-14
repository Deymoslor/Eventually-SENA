import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-report-events-groups-organizer',
  templateUrl: './modal-report-events-groups-organizer.component.html',
  styleUrls: ['./modal-report-events-groups-organizer.component.scss']
})
export class ModalReportEventsGroupsOrganizerComponent implements OnInit {

  share() {
    window.alert('El reporte se ha descargado exitosamente')
  }

  report() {
    window.alert('El reporte se ha generado exitosamente')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
