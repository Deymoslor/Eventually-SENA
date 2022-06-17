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
import { grupos } from './modals/public-private';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  //esta propiedad sirve para traer a los grupos con su respectivo numero de participantes
  allInvites!: AllInvites[];
  //esta propiedad sirve para traer a los rupos con mayor numero de eventos realizados
  allMajorEventGroup!: AllInvites[];
  //esta propiedad sirve para traer a los gustos con mayor numero de grupos
  allMajorLikesGroup!:AllInvites[];
  // esta propiedaad sirve para traer a todos los grupos públicos
  publicos = new FormGroup({
    grupos: new FormControl('')
  })
  value1a!: grupos;

  units1: string = 'Grupos Publicos';
  // esta propiedaad sirve para traer a todos los grupos privados
  privados = new FormGroup({
    grupos: new FormControl('')
  })
  value2a!: grupos;

  units2: string = 'Grupos Privados';

  // esta propiedad sirve para traer al numero total de grupos creados
  CountGroups = new FormGroup({
    grupos: new FormControl('')
  })
  value3a!: grupos;

  constructor(
    private Api:ApiTypeReportService,
    private router:Router,
    private fb: FormBuilder) {
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
    //Aquí traemos a todos los grupos con ma eventos realizados
    this.Api.getMajorEventsGroup(1).subscribe(data=>{
      this.allMajorEventGroup = data;
    })
    //Aquí traemos a todos los gustos que mas numero de grupos poseen.
    this.Api.getMajorLikesGroup(1).subscribe(data=>{
      this.allMajorLikesGroup = data;
    })
    // Aquí traemos el numero total de los grupos publicos.
    this.Api.getPublicGroups(1).subscribe((data: any)=>{
      this.value1a = data[0];
      this.publicos = this.fb.group({
        grupos : [this.value1a.grupos]
      });
      console.log(this.publicos.get('grupos')?.value);
    })
    //Aquí traemos el numero total de todos los grupos privados.
    this.Api.getPrivateGroups(1).subscribe((data: any)=>{
      this.value2a = data[0];
      this.privados = this.fb.group({
        grupos : [this.value2a.grupos]
      });
      console.log(this.privados.get('grupos')?.value);
    })
    //Aquí traemos el numero total de grupos creados.
    this.Api.getCountGroups(1).subscribe((data: any)=>{
      this.value3a = data[0];
      this.CountGroups = this.fb.group({
        grupos : [this.value3a.grupos]
      });
      console.log(this.CountGroups.get('grupos')?.value)
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
  yAxisLabel: string = 'Grupos';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Participantes';
  public legendPosition: LegendPosition = LegendPosition.Below;

  single = [
    {
      "name": "Dylan Grupo",
      "value": 8
    },
  ];

}
