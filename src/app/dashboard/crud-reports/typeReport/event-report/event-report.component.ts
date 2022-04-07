import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { ListEventsI } from 'src/app/models/listEvents.interface';
import { ApiTypeReportService } from '../api-type-report.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-event-report',
  templateUrl: './event-report.component.html',
  styleUrls: ['./event-report.component.scss']
})
export class EventReportComponent implements OnInit {

  id!: number;

  events?:ListEventsI[];

  constructor(private api:ApiTypeReportService) { }

  ngOnInit(): void {
    this.api.getAllEvents(1).subscribe(data =>{
      this.events = data;
    })
  }

  createPDFEvent(){

    html2canvas(document.getElementById('PdfEventos')!).then(function (canvas) {
      var data = canvas.toDataURL();
      var pdfDefinition = {
          content: [{
              image: data,
              width: 500,
          }]
      };
      pdfMake.createPdf(pdfDefinition).download("Reportes_Eventos.pdf");
  });

  }

}
