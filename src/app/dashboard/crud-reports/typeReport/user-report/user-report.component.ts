import { Component, OnInit } from '@angular/core';
// import {jsPDF} from 'node_modules/jspdf';
import * as pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.scss']
})
export class UserReportComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  createPDF(){

    const pdfDefinition: any = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: [ '*', 'auto', 100, '*' ],

          body: [
            [ 'First', 'Second', 'Third', 'The last one' ],
            [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
            [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
          ]
        }
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();

  }

}
