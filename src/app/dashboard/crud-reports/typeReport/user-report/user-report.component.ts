import { Component, OnInit } from '@angular/core';
// import {jsPDF} from 'node_modules/jspdf';
import html2canvas from 'html2canvas';
import { PersonaI } from 'src/app/dashboard/crud-users/modal-users/personaI.interface';
import { ListaPersonasI } from 'src/app/dashboard/crud-users/ListaPersonasI.interface';
import { ApiTypeReportService } from '../api-type-report.service';
import { Router } from '@angular/router';
import * as pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from 'pdfmake/build/vfs_fonts';
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

  constructor(private Api:ApiTypeReportService, private router:Router) {}

  ngOnInit(): void {
    this.Api.getAllPersons(1).subscribe(data=>{
      this.personas = data;
      })
  }

  createPDF(){
    // const pdfDefinition: any = {
    //   content: [
    //     {
    //       layout: 'lightHorizontalLines', // optional
    //       table: {
    //         headerRows: 1,
    //         widths: [ '*', 'auto', 100, '*' ],
    //         body: [
    //           [ 'Nombre', 'Documento', 'Fecha de nacimiento', 'Correo' ],
    //           [ '{{ this.personas:nombreUser }}', 'Value 2', 'Value 3', 'Value 4' ],
    //         ]
    //       }
    //     }
    //   ]
    // }

    html2canvas(document.getElementById('exportthis')!).then(function (canvas) {
      var data = canvas.toDataURL();
      var pdfDefinition = {
        content: [{
            image: data,
            width: 500,
        }]
      };
      pdfMake.createPdf(pdfDefinition).download("Reportes_User.pdf");
    });
  }
}
