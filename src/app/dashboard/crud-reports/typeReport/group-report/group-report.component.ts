import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListEventsI } from 'src/app/models/listEvents.interface';
import { ApiTypeReportService } from '../api-type-report.service';
import html2canvas from 'html2canvas';
import * as pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ListGroups } from 'src/app/dashboard/crud-groups/listGroups.interface';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { Socket } from 'dgram';
import { AllInvites } from './modals/all-invites';
import { LegendPosition } from '@swimlane/ngx-charts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-group-report',
  templateUrl: './group-report.component.html',
  styleUrls: ['./group-report.component.scss']
})
export class GroupReportComponent implements OnInit {

  id!: number;
  //esta propiedad sirve para traer toda la información acerca de los grupos
  groups!:ListGroups[];
  //esta propiedad sirve para traer a los grupos con mayor numero de participantes
  allMajorInvites!: AllInvites[];
  allInvites!: AllInvites[];

  constructor( private Api:ApiTypeReportService, private router:Router) {
    this.downloadPDF();
  }

  ngOnInit(): void {
    //Aquí traemos todos los grupos
    this.Api.getAllGroups(1).subscribe(data=>{
      this.groups = data;
    })
    //Aquí traemos los grupos con mas participantes
    this.Api.getAllMajorInvite(1).subscribe(data=>{
      this.allMajorInvites = data;
    })
    //Aquí traemos a todos los grupos con sus numero de participantes
    this.Api.getAllInvite(1).subscribe(data=>{
      this.allInvites = data;
    })
  }

  //Añadimos la funcion donde generaremos el archivo PDF
  public downloadPDF() {
    // llamamos al id del HTML donde queremos realizar la imagen canvas para luego
    // ser descargado como archivo PDF
    const DATA = document.getElementById('pdfGroups');
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
      docResult.save(`${new Date().toISOString()}_grupos.pdf`);
    });
  }

  //Iniciamos con la grafica de los grupos con mas participantes

  view: [number, number] = [700, 400];

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
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';
  public legendPosition: LegendPosition = LegendPosition.Below;

  single = [
    {
      "name": "Dylan Grupo",
      "value": 8
    },
  ];

}
