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
import { Md5 } from 'ts-md5/dist/md5';

//Interfaz para definir los datos de la table.
// export interface PeriodicElement {
//   position: number;
//   firstName: string;
//   lastName: string;
//   document: number;
//   bornDate: string;
//   email: string;
//   state: string;
//   actions: null;
// }

//Toda la información que tendrá la tabla
// let ELEMENT_DATAORIGINAL: PeriodicElement[] = [
//   {position: 1, firstName: 'Jordan', lastName: 'Flórez', document: 1001236570, bornDate: '14/04/2003', email: 'jordan@gmail.com', state: '', actions:null}
//   // {position: 2, firstName: 'Dylan', lastName: 'Murillo', document: 1554894878, bornDate: '09/04/2003', email: 'Dylan@gmail.com', state: '', actions:null},
//   // {position: 3, firstName: 'Oscar', lastName: 'Rolón', document: 5668756427, bornDate: '05/08/2003', email: 'Oscar@gmail.com', state: '', actions:null},
//   // {position: 4, firstName: 'Santiago', lastName: 'Usuga', document: 6657899548, bornDate: '09/03/2003', email: 'Santiago@gmail.com', state: '', actions:null},
//   // {position: 5, firstName: 'Juan', lastName: 'Zapata', document: 4657984125, bornDate: '25/11/2003', email: 'Juan@gmail.com', state: '', actions:null},
//   // {position: 6, firstName: 'Miguel', lastName: 'Soto', document: 7945249861, bornDate: '15/10/2003', email: 'Miguel@gmail.com', state: '', actions:null},
// ];

// let ELEMENT_DATA: ListaPersonasI[] = [
//   // {position: 1, firstName: 'Jordan', lastName: 'Flórez', document: 1001236570, bornDate: '14/04/2003', email: 'jordan@gmail.com', state: '', actions:null}
//   // {position: 2, firstName: 'Dylan', lastName: 'Murillo', document: 1554894878, bornDate: '09/04/2003', email: 'Dylan@gmail.com', state: '', actions:null},
//   // {position: 3, firstName: 'Oscar', lastName: 'Rolón', document: 5668756427, bornDate: '05/08/2003', email: 'Oscar@gmail.com', state: '', actions:null},
//   // {position: 4, firstName: 'Santiago', lastName: 'Usuga', document: 6657899548, bornDate: '09/03/2003', email: 'Santiago@gmail.com', state: '', actions:null},
//   // {position: 5, firstName: 'Juan', lastName: 'Zapata', document: 4657984125, bornDate: '25/11/2003', email: 'Juan@gmail.com', state: '', actions:null},
//   // {position: 6, firstName: 'Miguel', lastName: 'Soto', document: 7945249861, bornDate: '15/10/2003', email: 'Miguel@gmail.com', state: '', actions:null},
// ];

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

  private globalAccountConstants:globalAccountConstants

  ) { }

  ngOnInit(): void {

    // ----

    console.log(this.authService.getRol);

    // let idPersona = this.globalAccountConstants.id.value;

    // console.log(idPersona);

    console.log();

    let message = localStorage.getItem('id');
    const md5 = new Md5();
    message = md5.


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

        // console.log("Entrando aquí");

        window.location.reload();

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

          window.location.reload();

        });

      });

    }

  }
}
