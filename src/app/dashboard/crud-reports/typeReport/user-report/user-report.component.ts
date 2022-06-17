import { Component, OnInit } from '@angular/core';
// import {jsPDF} from 'node_modules/jspdf';
import html2canvas from 'html2canvas';
import { PersonaI } from 'src/app/dashboard/crud-users/modal-users/personaI.interface';
import { ListaPersonasI } from 'src/app/dashboard/crud-users/ListaPersonasI.interface';
import { ApiTypeReportService } from '../api-type-report.service';
import { Router } from '@angular/router';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import jsPDF from 'jspdf';
import pdf from 'html-pdf';
import path from 'path';
import { AllInvites } from '../group-report/modals/all-invites';
import { LegendPosition } from '@swimlane/ngx-charts';
import { AllUsers } from './modals/all-users';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.scss']
})
export class UserReportComponent implements OnInit {

  //Propiedad que nos sirve para actualizar el estado.
  datosPersona!:PersonaI;

  //Mensaje del padre
  parentMessage!: number;

  personas!:ListaPersonasI[];

  //esta propiedad sirve para traer a los organizadores con mayor numero de grupos
  MajorManagerGroups!: AllUsers[];
  //esta propiedad sirve para traer a los invitados con su respectivo numero de grupos relacionados
  MajorInviteGroups!: AllUsers[];
  //esta propiedad sirve para traer a los organizadores con mayor numero de eventos realizados
  MajorManagerEvents!: AllUsers[];
  //esta propiedad sirve para traer a los gustos con mayor numero de usuarios
  MajorLikesUsers!:AllUsers[];

  constructor(private Api:ApiTypeReportService, private router:Router) {}

  ngOnInit(): void {
    //aquí traemos a todos los usuarios sin ninguna condición en especifíco.
    this.Api.getAllPersons(1).subscribe(data=>{
      this.personas = data;
    })
    //aquí traemos a los organizadores con mayor numero de grupos.
    this.Api.getMajorManagerGroups(1).subscribe(data=>{
      this.MajorManagerGroups = data;
    })
    //aquí traemos a los invitados con su respectivo numero de grupos relacionados.
    this.Api.getMajorInviteGroups(1).subscribe(data =>{
      this.MajorInviteGroups = data;
    })
    //aquí traemos a los organizadores con mayor numero de eventos organizados.
    this.Api.getMajorManagerEvents(1).subscribe(data =>{
      this.MajorManagerEvents = data;
    })
    //aquí traemos a los gustos mas solicitados por los usuarios.
    this.Api.getMajorLikesUsers(1).subscribe(data =>{
      this.MajorLikesUsers = data;
    })
  }

  createPDF(){
    const DATA = document.getElementById('pdfUsers');
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
      docResult.save(`${new Date().toISOString()}_usuarios.pdf`);
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
