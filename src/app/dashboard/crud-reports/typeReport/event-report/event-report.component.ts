import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { ListEventsI } from 'src/app/models/listEvents.interface';
import { ApiTypeReportService } from '../api-type-report.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import jsPDF from 'jspdf';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { LegendPosition } from '@swimlane/ngx-charts';
import { AllEvents } from './modals/all-events';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CountI } from "./modals/count";
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-event-report',
  templateUrl: './event-report.component.html',
  styleUrls: ['./event-report.component.scss']
})
export class EventReportComponent implements OnInit {

  id!: number;

  events?:ListEventsI[];

  ListTypeEvent!:AllEvents[];
  Invited = new FormGroup({
    grupos: new FormControl('')
  })
  value1a!: CountI;

  units1: string = 'Invitados';
  // esta propiedaad sirve para traer a todos los grupos privados
  Accepted = new FormGroup({
    grupos: new FormControl('')
  })
  value2a!: CountI;

  units2: string = 'RAceptados';

  // esta propiedad sirve para traer al numero total de grupos creados
  Denied = new FormGroup({
    grupos: new FormControl('')
  })
  value3a!: CountI;

  units3: string = 'Rechazados';

  Finished = new FormGroup({
    grupos: new FormControl('')
  })
  value4a!: CountI;

  units4: string = 'Finalizados';

  CountAllEvents = new FormGroup({
    grupos: new FormControl('')
  })
  value5a!: CountI;

  constructor(private api:ApiTypeReportService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    //aquí llamamos a todos los eventos
    this.api.getAllEvents(1).subscribe(data =>{
      this.events = data;
    })
    //aquí llamamos a los valores de los tipos de eventos (presenciales o virtuales).
    this.api.getlistTypeEvent(1).subscribe(data =>{
      this.ListTypeEvent = data;
    })
    this.api.getInvitedEvents(1).subscribe((data: any)=>{
      this.value1a = data[0];
      this.Invited = this.fb.group({
        count : [this.value1a.count]
      });
      console.log(this.Invited.get('count')?.value);
    })
    this.api.getAcceptedEvents(1).subscribe((data:any)=>{
      this.value2a = data[0];
      this.Accepted = this.fb.group({
        count : [this.value2a.count]
      });
      console.log(this.Accepted.get('count')?.value);
    })
    this.api.getDeniedEvents(1).subscribe((data: any)=>{
      this.value3a = data[0];
      this.Denied = this.fb.group({
        count : [this.value3a.count]
      });
      console.log(this.Denied.get('count')?.value);
    })
    this.api.getFinishedEvents(1).subscribe((data: any)=>{
      this.value4a = data[0];
      this.Finished = this.fb.group({
        count : [this.value4a.count]
      });
      console.log(this.Finished.get('count')?.value);
    })
    this.api.getAllCountEvents(1).subscribe((data: any)=>{
      this.value5a = data[0];
      this.CountAllEvents = this.fb.group({
        count : [this.value5a.count]
      });
      console.log(this.CountAllEvents.get('count')?.value);
    })
  }

  createPDF(){
    const DATA = document.getElementById('pdfEventos');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA!, options).then((canvas) => {
      const img = canvas.toDataURL();

      // Añade imagen canvas al archivo PDF
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF('p', 'mm', "a4");
      var position = 0;

      doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight+10);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight+10);
          heightLeft -= pageHeight;
      }
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_eventos.pdf`);
    });

  }

      //Iniciamos con la grafica de los grupos con mas participantes

      view: [number, number] = [700, 400];

      viewCountGroups: [number, number] = [700, 200];

      // options
      gradient: boolean = false;
      showLegend: boolean = true;
      showLabels: boolean = true;
      isDoughnut: boolean = false;

      colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      };

      onSelect(data: any): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
      }

      onActivate(data: any): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
      }

      onDeactivate(data: any): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
      }

      //finalizamos con los grupos con mas participantes
      //Iniciamos con la grafíca que traerá a todos los grupos con el numero de participantes respectivos

      // options
      showXAxis: boolean = true;
      showYAxis: boolean = true;
      gradient1: boolean = false;
      showXAxisLabel: boolean = true;
      yAxisLabel: string = 'organizadores';
      showYAxisLabel: boolean = true;
      xAxisLabel: string = 'Grupos';
      xAxisLabel2: string = 'Eventos';
      public legendPosition: LegendPosition = LegendPosition.Below;

      single = [
        {
          "name": "Dylan Grupo",
          "value": 8
        },
      ];

}
