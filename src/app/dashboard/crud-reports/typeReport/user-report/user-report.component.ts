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
    __dirname = path.resolve(path.dirname(''));
    const content = `
    <div class="container theme-showcase" role="main">
    <div class="jumbotron">
      <h1>Reporte de Usuarios</h1>
      <p>TEste es el reporte de usuarios que se realiza en este mes.</p>
    </div>

    <table class="table table-warning">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">documento</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody class="table-secondary">
        <tr *ngFor="let persona of personas">
          <th scope="row">{{persona.idPersona}}</th>
          <td>{{persona.nombre}}</td>
          <td>{{persona.apellidos}}</td>
          <td>{{persona.documento}}</td>
          <td>{{persona.Email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `;

  pdf.create(content).toFile(`./${new Date().toISOString()}_usuarios.pdf`, function(err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  })
  }
}
