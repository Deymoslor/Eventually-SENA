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

  events?:ListEventsI[];

  constructor(private api:ApiService) { }

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