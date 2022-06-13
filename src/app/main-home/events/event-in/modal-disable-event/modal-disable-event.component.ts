import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EventI } from '../../../../models/event.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../services/api/api.service';
import { ResultServiceI } from 'src/app/models/result-service.interface';
import { GlobalConstants } from 'src/app/global-constants';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';

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

  constructor(private api:ApiService, private alertas: AlertasService) { }

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
      this.form.imagen = this.form.imagen.replace(GlobalConstants.httpLocalHost, 'C:/xampp/htdocs')
      this.api.putEvent(this.form).subscribe(data=>{
        console.log(data);
        let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Accion exitosa','Evento terminado');
            setTimeout(()=>{
              this.refresh();
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(()=>{
              this.refresh();
            },2000);
          }
      });
      // this.refresh();
    }else if(this.finishState == 1){
      let idResult = 0;
      this.api.postResultEvent(form).subscribe((dataR) =>{
        console.log(dataR.result['idResult'])
        // idResult = data.result['idResult']
        this.form.resultadoservicios_idresultadoServicio = dataR.result['idResult'];
        this.form.imagen = this.form.imagen.replace(GlobalConstants.httpLocalHost, 'C:/xampp/htdocs')
      this.api.putEvent(this.form).subscribe(data=>{
        console.log(data)
        let respuesta:ResponseI = data;
        //Verificamos si la respuesta es exitosa.
        if(respuesta.status == 'ok'){
          this.alertas.showSuccess('Union exitosa','Registro exitoso');
          setTimeout(()=>{
            this.refresh();
          },2000);
        }else{
          this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
          setTimeout(()=>{
            this.refresh();
          },2000);
        }
      });
      })
      
      
      // this.refresh();
    }
    console.log(form)
  }

  refresh(): void { window.location.reload(); }

}
