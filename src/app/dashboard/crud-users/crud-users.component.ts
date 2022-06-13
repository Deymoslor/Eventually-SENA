import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { userService } from './service/userService.service';
import { Router } from '@angular/router';
import { ListaPersonasI } from './ListaPersonasI.interface';
import { PersonaI } from './modal-users/personaI.interface';
import { FormGroup, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { globalAccountConstants } from 'src/app/constants/globalAccountConstants';
import { AlertasService } from 'src/app/core/service/alertas.service';
import { ResponseI } from '../../core/ui/response.interface';

@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.scss']
})
export class CrudUsersComponent implements OnInit {

  //Propiedad que nos sirve para actualizar el estado.
  datosPersona!:PersonaI;

  //Mensaje del padre
  parentMessage!: number;

  //Creamos el FormGroup que nos sirve para poder tener el formulario con los campos correctos y en caso de necesitar validators.
  editarForm = new FormGroup({
    idPersona: new FormControl(''),
    //Cuando agregemos el token, aquí debería ir.
    token: new FormControl(''),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    documento: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    Email: new FormControl(''),
    // password: new FormControl(''),
    // celular: new FormControl(''),
    // ciudad: new FormControl(''),
    estado: new FormControl(''),
    // roles_idRoles: new FormControl(''),
  });

  //Variables para probar el llenado de la table.
  // position!:string;
  // firstName!:string;
  // lastName!:string;
  // document!:number;
  // bornDate!:string;
  // email!:string;
  // state!:string;
  // actions!:null;

  //Creamos una variable que almacenará con ayuda de la interfaz los datos de los pacientes.
  personas!:ListaPersonasI[];

// displayedColumns: string[] = ['idPersona', 'nombre', 'apellidos', 'documento', 'fechaNacimiento', 'Email', 'Estado', 'actions'];

// dataSource = new MatTableDataSource(ELEMENT_DATA);

// @ViewChild(MatPaginator, { static: true })
// paginator!: MatPaginator;

constructor(

  //Inyectamos nuestro servicio.
  private userService:userService,

  private authService: AuthService,

  //Inyectamos el router.
  private router:Router,

  private globalAccountConstants:globalAccountConstants,

  private alertas:AlertasService,

  ) { }

  ngOnInit(): void {

    // ----

    // console.log(this.authService.getRol);

    // let idPersona = this.globalAccountConstants.id.value;

    // console.log(idPersona);

    // console.log();

    // console.log(this.authService.desencriptar(localStorage.getItem('nombreRol')));



    // ----

    // this.dataSource.paginator = this.paginator;

    //valor por defecto del id para evitar el error de campos vacíos al iniciar el padre (crud-users.component) sin el hijo (modal-users.component).
    // this.parentMessage = "1";

    //Obtenemos todos los pacientes.
    this.userService.getAllPersons(1).subscribe(data=>{
    //recibimos por consola los datso que nos esté trayendo.
    // console.log(data);

    //Llamamos a la variable que creamos arriba para asignarle los datos que hay en la variable data.
    this.personas = data;
    // ELEMENT_DATA = data;
    // console.log(ELEMENT_DATA);

    })

  }

  editarPersona(id:number){

    //Imprimimos por consola para saber si está tomando el ID como debe de ser.
    // console.log(id);
    //Enviamos al hijo el id de la persona que vamos a editar.
    // console.log("parentMessage");

    this.parentMessage = id;
    //Cuando vayamos a crear el editar, debemos de tener en cuenta que si lo queremos pasar a otra ruta debemos de pasar un array, que es la ruta (lugar a donde se dirige) y una variable, en este caso el id
    // this.router.navigate(['editar', id]);
    //Dentro del router, debe estar así para idicarle que va a recibir un parámetro cada vez que ingrese a la ruta.
    //{ path:'editar/:id', component:editarComponent}

  }

  cambioEstado(estado:string,id:number){

    if (estado === "Activo") {

      //Llamamos al servicio para solicitar una sola persona y poder editar el estado sin cambiar el resto de datos de la cuenta.
      this.userService.getSinglePerson(id).subscribe((data:any) =>{

      //asignamos el valor que venga desde la API a una variable para poder recorrerla.
      this.datosPersona = data[0];

      // console.log(this.datosPersona);


      this.datosPersona.estado="Inactivo";

      let token = localStorage.getItem('token');

      this.datosPersona.token = token;

      this.userService.putPerson(this.datosPersona).subscribe((data:any) =>{
        let respuesta:ResponseI = data;
        //Verificamos si la respuesta es exitosa.
        if(respuesta.status == 'ok'){
          this.alertas.showSuccess('Estado de usuario actualizado','Acción exitosa');
          // console.log("Entrando aquí");
          setTimeout(() =>{
            //redirecionamos a el login.
            window.location.reload();
          },2000);
        }else{
          this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
          window.location.reload();
        }
      });


    });

    }else{

        //Llamamos al servicio para solicitar una sola persona y poder editar el estado sin cambiar el resto de datos de la cuenta.
        this.userService.getSinglePerson(id).subscribe((data:any) =>{

        //asignamos el valor que venga desde la API a una variable para poder recorrerla.
        this.datosPersona = data[0];

        this.datosPersona.estado="Activo";

        let token = localStorage.getItem('token');

        this.datosPersona.token = token;

        this.userService.putPerson(this.datosPersona).subscribe((data:any) =>{

          let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Estado de usuario actualizado','Acción exitosa');
            // console.log("Entrando aquí");
            setTimeout(() =>{
              //redirecionamos a el login.
              window.location.reload();
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
          }
        });

      });

    }

  }
}
