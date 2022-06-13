import { Component, OnInit, Input } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaI } from './personaI.interface';
import { PersonaModalI } from './personaModalI.interface';
import { userService } from '../service/userService.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ResponseI } from '../../../core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.scss']
})
export class ModalUsersComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number;} | undefined;

  //Input para recibir el id que viene por parte del padre, el crud-users.component general.
  @Input() childMessage!: number;

  editarForm: FormGroup;

  constructor(
    private calendar:NgbCalendar,
    private activerouter: ActivatedRoute,
    private router: Router,
    private formBuilder:FormBuilder,
    private userService:userService,
    private alertas:AlertasService
  ) {

    //Creamos el FormGroup que nos sirve para poder tener el formulario con los campos correctos y en caso de necesitar validators.
    this.editarForm = this.formBuilder.group({
      idPersona: [],
      token: [],
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
      documento: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]],
      fechaNacimiento: ['',Validators.required],
      Email: ['',[Validators.required, Validators.email]],
      // password: ,
      celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]],
      ciudad: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
      estado: [],
      // roles_idRoles:
    });

  }

  //Creamos una variable que será de tipo PersonaI para poder almacenar los datos traidos con la consulta. Para esto, además necesitamos un formGroup.
  datosPersona!:PersonaI;

  ngOnInit(): void {

  }

  ngOnChanges(): void{

    //Creamos una variable let para tomar el id que viene por url, recordar que el id se pone ya que en el routing definimos que iba a enviar una variable con este nombre.
    // let personaId = this.activerouter.snapshot.paramMap.get('id');

    //En nuestro caso tomamos la variable del padre definida con ayuda del input.
    let personaId = this.childMessage;
    // console.log(personaId);

    //Creamos otra variable para el token.
    let token = this.getToken();
    // console.log(token);

    //llamamos al servicio para obtener la información de todos los campos de la persona.
    this.userService.getSinglePerson(personaId).subscribe((data:any) =>{
      //Comprobamos que datos trae data.
      // console.log(data);
      //Ahora queremos asignar a el FormGroup anteriormente definido los valores que estamos trayendo desde el servicio.

      //para poder acceder al array que está trayendo primero debemos acceder al elemento 0 pues es un array dentro de otro array por ende siempre debemos acceder primero a la posición 0.
      this.datosPersona = data[0];

      //Comprobamos que datos nos está trayendo ahora este nuevo data filtrado por posición 0.
      // console.log(this.datosPersona);

      //llamamos nuestro formulario para empezar a asignarle la información de los campos.
      this.editarForm.setValue({
        //El id que tomamos del padre.
        'idPersona' : personaId,
        //El token que tomamos del almacenamiento interno.
        'token' : token,
        'nombre' : this.datosPersona.nombre,
        'apellidos' : this.datosPersona.apellidos,
        'documento' : this.datosPersona.documento,
        'fechaNacimiento' : this.datosPersona.fechaNacimiento,
        'Email' : this.datosPersona.Email,
        // 'password' : this.datosPersona.password,
        'celular' : this.datosPersona.celular,
        'ciudad' : this.datosPersona.ciudad,
        'estado' : this.datosPersona.estado,
        // 'roles_idRoles' : this.datosPersona.Roles_idRoles,
      })

      //Imprimimos el formulario por consola.
      // console.log(this.editarForm.value);

    });

  }

  //Creamos método a futuro para pedir el token.
  getToken(){
    //Pedimos que del almacenamiento local nos pase la variable token.
    return localStorage.getItem('token');
  }

  //Método que se ejecuta cuando se hace submit de formulario para enviar los datos editados.
  postForm(form:PersonaI){

    //Creamos log para verificar que la información está cambiando cuando presinamos el botón.
    console.log(form);

    //llamamos el método de actualizar desde el servicio.
    this.userService.putPerson(form).subscribe((data:any) =>{
      console.log(data);
      // setTimeout(function(){
      //   window.location.reload();
      // }, 7000);
      setTimeout(() =>{
        window.location.reload();
      },2000);
      let respuesta:ResponseI = data;
      if (respuesta.status == 'ok') {
        this.alertas.showSuccess('El usuario ha sido editado exitosamente','Usuario editado');
        //Recargamos página.
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Error');
      }
    });

  }

}
