import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EventI } from '../../../../models/event.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../services/api/api.service';
import { ResultServiceI } from 'src/app/models/result-service.interface';

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

  dataResult!: ResultServiceI;
  resultForm = new FormGroup({
    idresultadoServicio: new FormControl(''),
    calificacion: new FormControl(''),
    problemasEncontrados: new FormControl(''),
    descripcionResultado: new FormControl(''),
  })

  constructor(private api:ApiService,) { }

  ngOnInit(): void {
    console.log(this.form);
    console.log(this.idEvento);
    console.log(this.idServiceAceppted)
    console.log(this.finishState);
  }

  finishEvent(form: ResultServiceI){
    idresult: 0;
    this.form.estadoEvento = 3;
    if(this.finishState == 2){
      this.api.putEvent(this.form).subscribe(data=>{
        console.log(data);
      });
      // this.refresh();
    }else if(this.finishState == 1){
      let idResult = 0;
      this.api.postResultEvent(form).subscribe((data) =>{
        console.log(data.result['idResult'])
        // idResult = data.result['idResult']
        this.form.resultadoservicios_idresultadoServicio = data.result['idResult'];
      this.api.putEvent(this.form).subscribe(data=>{
        console.log(data)
      });
      })
      
      
      this.refresh();
    }
    console.log(form)
  }

  refresh(): void { window.location.reload(); }

}
