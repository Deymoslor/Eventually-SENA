import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  reportDate: string;
  typeReport: string;
  actions: null;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, reportDate: '7-enero-2020', typeReport: 'eventos', actions:null},
  {position: 2, reportDate: '12-enero-2020', typeReport: 'grupos', actions:null},
  {position: 3, reportDate: '23-enero-2020', typeReport: 'usuarios', actions:null},
  {position: 4, reportDate: '7-febrero-2020', typeReport: 'eventos', actions:null},
  {position: 5, reportDate: '12-febrero-2020', typeReport: 'grupos', actions:null},
  {position: 6, reportDate: '23-febrero-2020', typeReport: 'usuarios', actions:null},
];

@Component({
  selector: 'app-crud-reports',
  templateUrl: './crud-reports.component.html',
  styleUrls: ['./crud-reports.component.scss']
})
export class CrudReportsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'reportDate', 'typeReport', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  shareDownload() {
    window.alert('el reporte se ha descargado exitosamente');
  }

  shareCreate() {
    window.alert('el reporte se ha generado exitosamente');
  }

}
