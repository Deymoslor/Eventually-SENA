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
  @Input() finishState!: number;
  @Input() idServiceAceppted!: number;
  // @Input() stateEvent!: number;

  constructor(private api:ApiService,) { }

  ngOnInit(): void {
    console.log(this.form);
    console.log(this.idEvento);
    console.log(this.idServiceAceppted)
    console.log(this.finishState);
  }

  finishEvent(){
    this.form.estadoEvento = 3;
    if(this.finishState == 2){
      this.api.putEvent(this.form).subscribe(data=>{
        console.log(data);
      });
      this.refresh();
    }else if(this.finishState == 1){
      this.api.putEvent(this.form).subscribe(data=>{
        
      });
      
      this.refresh();
    }
  }

  refresh(): void { window.location.reload(); }

}
