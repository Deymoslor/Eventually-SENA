import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EventI } from '../../../../models/event.interface';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-modal-disable-event',
  templateUrl: './modal-disable-event.component.html',
  styleUrls: ['./modal-disable-event.component.scss']
})
export class ModalDisableEventComponent implements OnInit {

  @Input() form!: EventI;
  // @Input() stateEvent!: number;

  constructor(private api:ApiService,) { }

  ngOnInit(): void {
    console.log(this.form);
  }

  ngOnChanges(): void{
    console.log(this.form);
  }

  finishEvent(num:number){
    this.form.estadoEvento = num;
    this.api.putEvent(this.form).subscribe(data=>{
      console.log(data);
    });
    // this.api.
    // this.refresh();
  }

  refresh(): void { window.location.reload(); }

}
