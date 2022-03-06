import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-event',
  templateUrl: './settings-event.component.html',
  styleUrls: ['./settings-event.component.scss']
})
export class SettingsEventComponent implements OnInit {

  share() {
    window.alert('El Reporte se ha descargado exitosamente');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
