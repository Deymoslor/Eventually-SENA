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

  @Input() idEvento!: number;
  @Input() form!: EventI;
  // @Input() stateEvent!: number;

  constructor(private api:ApiService,) { }

  ngOnInit(): void {
    console.log(this.form);
    console.log(this.idEvento);
  }

  finishEvent(){
    this.form.estadoEvento = 3;
    this.api.putEvent(this.form).subscribe(data=>{
      console.log(data);
    });
    this.refresh();
  }

  refresh(): void { window.location.reload(); }

}
