import { Component, OnInit } from '@angular/core';
import { ListEventsI } from 'src/app/models/listEvents.interface';
import { ApiTypeReportService } from '../api-type-report.service';
import html2canvas from 'html2canvas';
import * as pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ListGroups } from 'src/app/dashboard/crud-groups/listGroups.interface';
import { Router } from '@angular/router';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-group-report',
  templateUrl: './group-report.component.html',
  styleUrls: ['./group-report.component.scss']
})
export class GroupReportComponent implements OnInit {

  id!: number;

  groups!:ListGroups[];

  // displayedColumns: string[] = ['position', 'NameGroups', 'DescriptionGroups', 'Privacy', 'TotalUsers','StateGroup', 'actions'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatPaginator, { static: true })
  // paginator!: MatPaginator;
  constructor( private Api:ApiTypeReportService, private router:Router) { }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;

    this.Api.getAllGroups(1).subscribe(data=>{
      console.log(data);

      this.groups = data;
    })
  }

  createPDFGrupos(){

    html2canvas(document.getElementById('pdfGroups')!).then(function (canvas) {
      var data = canvas.toDataURL();
      var pdfDefinition = {
          content: [{
              image: data,
              width: 500,
          }]
      };
      pdfMake.createPdf(pdfDefinition).download("Reportes_Grupos.pdf");
  });

  }

}
