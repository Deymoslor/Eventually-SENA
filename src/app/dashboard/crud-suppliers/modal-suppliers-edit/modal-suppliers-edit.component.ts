import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ProveedorI } from '../modal-suppliers-create/ProveedorI.interface';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-modal-suppliers-edit',
  templateUrl: './modal-suppliers-edit.component.html',
  styleUrls: ['./modal-suppliers-edit.component.scss']
})
export class ModalSuppliersEditComponent implements OnInit {

  // model: NgbDateStruct | undefined;
  // date: { year: number; month: number;} | undefined;

  //Input para recibir el id que viene por parte del padre, el crud-users.component general.
  @Input() childMessage!: number;

  constructor(

    private calendar:NgbCalendar,
    private activerouter: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService

  ) { }

  //Creamos una variable que será de tipo PersonaI para poder almacenar los datos traidos con la consulta. Para esto, además necesitamos un formGroup.
  datosProveedor!:ProveedorI;

  //Creamos el FormGroup que nos sirve para poder tener el formulario con los campos correctos y en caso de necesitar validators.
  editarForm = new FormGroup({
    idProveedor: new FormControl(''),
    token: new FormControl(''),
    nombreProveedor: new FormControl(''),
    apellidoProveedor: new FormControl(''),
    correoProveedor: new FormControl(''),
    codigoAcceso: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    celular: new FormControl(''),
    estado: new FormControl(''),
  });

  ngOnInit(): void {

  }

  ngOnChanges(): void{

    //Creamos una variable let para tomar el id que viene por url, recordar que el id se pone ya que en el routing definimos que iba a enviar una variable con este nombre.
    // let personaId = this.activerouter.snapshot.paramMap.get('id');

    //En nuestro caso tomamos la variable del padre definida con ayuda del input.
    let idProveedor = this.childMessage;
    // console.log(idProveedor);

    //Creamos otra variable para el token.
    let token = this.getToken();
    // console.log(token);

    //llamamos al servicio para obtener la información de todos los campos de la persona.
    this.supplierService.getSingleSupplier(idProveedor).subscribe((data:any) =>{
      //Comprobamos que datos trae data.
      // console.log(data);
      //Ahora queremos asignar a el FormGroup anteriormente definido los valores que estamos trayendo desde el servicio.

      //para poder acceder al array que está trayendo primero debemos acceder al elemento 0 pues es un array dentro de otro array por ende siempre debemos acceder primero a la posición 0.
      this.datosProveedor = data[0];

      //Comprobamos que datos nos está trayendo ahora este nuevo data filtrado por posición 0.
      console.log(this.datosProveedor);

      //Asignamos valor para evitar el error en consola de que los valores de this.datosPersona estan null.
      // this.editarForm.setValue({
      //   'idProveedor' : "this.datosPersona.idPersona",
      //   'token' : "this.datosPersona.token",
      //   'nombreProveedor' : "this.datosPersona.nombre",
      //   'apellidoProveedor' : "this.datosPersona.apellidos",
      //   'correoProveedor' : "this.datosPersona.documento",
      //   'codigoAceeso' : "this.datosPersona.fechaNacimiento",
      //   'fechaNacimiento' : "this.datosPersona.Email",
      //   'Celular' : "this.datosPersona.password",
      //   'Estado' : "this.datosPersona.Celular",
      // })


      //llamamos nuestro formulario para empezar a asignarle la información de los campos.
      this.editarForm.setValue({
        //El id que tomamos del padre.
        'idProveedor' : idProveedor,
        //El token que tomamos del almacenamiento interno.
        'token' : token,
        'nombreProveedor' : this.datosProveedor.nombreProveedor,
        'apellidoProveedor' : this.datosProveedor.apellidoProveedor,
        'correoProveedor' : this.datosProveedor.correoProveedor,
        'codigoAcceso' : this.datosProveedor.codigoAcceso,
        'fechaNacimiento' : this.datosProveedor.fechaNacimiento,
        'celular' : this.datosProveedor.celular,
        'estado' : this.datosProveedor.estado,
      })

      //Imprimimos el formulario por consola.
      console.log(this.editarForm.value);
      console.log('prueba');


    });

  }

  //Creamos método a futuro para pedir el token.
  getToken(){
    //Pedimos que del almacenamiento local nos pase la variable token.
    return localStorage.getItem('token');
  }

  //Método que se ejecuta cuando se hace submit de formulario para enviar los datos editados.
  postForm(form:ProveedorI){

    //Creamos log para verificar que la información está cambiando cuando presinamos el botón.
    // console.log(form);

    //llamamos el método de actualizar desde el servicio.
    this.supplierService.putSupplier(form).subscribe((data:any) =>{
      // console.log(data);
      //Recargamos página.
      window.location.reload();
    });

  }

}
