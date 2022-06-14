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
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-group-report',
  templateUrl: './group-report.component.html',
  styleUrls: ['./group-report.component.scss']
})
export class GroupReportComponent implements OnInit {

  id!: number;

  groups!:ListGroups[];

  constructor( private Api:ApiTypeReportService, private router:Router) {
    this.downloadPDF();
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;

    this.Api.getAllGroups(1).subscribe(data=>{
      console.log(data);

      this.groups = data;
    })
  }

  public downloadPDF() {
    // let elements = document.querySelectorAll("#pdfGroups .theme-showcase");
    // const elements = document.getElementById('pdfGroups');
    const DATA = document.getElementById('pdfGroups');
    const doc = new jsPDF('p','pt','a4');
    const options = {
      background: 'white',
      scale: 3
    };
    // doc.html(DATA,{
    //   callback: (doc) => {
    //     doc.save(`${new Date().toISOString()}_grupos.pdf`);
    //   }
    // })

    html2canvas(DATA!, options).then((canvas) => {
      const img = canvas.toDataURL();

      // Add image Canvas to PDF
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

  // createPDFGrupos(){



  //   html2canvas(document.getElementById('pdfGroups')!).then(function (canvas) {
  //     var data = canvas.toDataURL();
  //     var doc = new jsPDF();
  //     var pdfDefinition = {
  //         content: [{
  //             image: data,
  //             width: 500,
  //         }]
  //     };
  //     pdfMake.createPdf(pdfDefinition).download("Reportes_Grupos.pdf");
  // });

  // }

}
