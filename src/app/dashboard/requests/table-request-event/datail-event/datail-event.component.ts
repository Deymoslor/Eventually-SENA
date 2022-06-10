import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { EventI } from 'src/app/models/event.interface';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'app-datail-event',
  templateUrl: './datail-event.component.html',
  styleUrls: ['./datail-event.component.scss']
})
export class DatailEventComponent implements OnInit {

  @Input() idEvent!: string;
  dataEvent!: EventI;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    console.log(this.idEvent);
    this.api.getSingleEvent(this.idEvent).subscribe((data: any) => {
      // console.log(data);
      if (data != 0) {
        this.dataEvent = data[0];
        console.log(this.dataEvent);
        this.dataEvent.imagen = this.dataEvent.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost)
      }
    })
  }

}
