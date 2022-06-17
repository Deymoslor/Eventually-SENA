import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from "../../services/api/api.service";
import { ListEventsI } from '../../models/listEvents.interface';

@Component({
  selector: 'app-crud-events',
  templateUrl: './crud-events.component.html',
  styleUrls: ['./crud-events.component.scss']
})
export class CrudEventsComponent implements OnInit {


  id!: number;

  events!:ListEventsI[];

  constructor(private api:ApiService) { }

  closeResult = '';

  filterEvento = '';

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [10, 20, 30, 40, 50];
  lengthTable!: number

  totalRecords!: number;

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  ngOnInit(): void {
    this.api.getAllEvents(1).subscribe(data =>{
      this.events = data;
      console.log(data)
    })
  }

  editEvent(id: number){
    this.id = id;
    // console.log(this.id);
  }

  

}