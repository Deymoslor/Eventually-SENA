import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ProveedorI } from './modal-suppliers-create/ProveedorI.interface';
import { ListaProveedoresI } from './ListaProveedoresI.interface';
import { SupplierService } from './service/supplier.service';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/core/service/alertas.service';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';

@Component({
  selector: 'app-crud-suppliers',
  templateUrl: './crud-suppliers.component.html',
  styleUrls: ['./crud-suppliers.component.scss']
})
export class CrudSuppliersComponent implements OnInit {

  //Propiedad que nos sirve para actualizar el estado.
  datosProveedor!:ProveedorI;

  //Mensaje del padre
  parentMessage!: number;

  //Creamos el FormGroup que nos sirve para poder tener el formulario con los campos correctos y en caso de necesitar validators.
  editarForm = new FormGroup({
    idProveedor: new FormControl(''),
    //Cuando agregemos el token, aquí debería ir.
    token: new FormControl(''),
    nombreProveedor: new FormControl(''),
    apellidoProveedor: new FormControl(''),
    correoProveedor: new FormControl(''),
    codigoAcceso: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    celular: new FormControl(''),
    estado: new FormControl(''),
  });


  //Creamos una variable que almacenará con ayuda de la interfaz los datos de los pacientes.
  proveedores!:ListaProveedoresI[];

  // displayedColumns: string[] = ['position', 'firstName', 'lastName', 'email', 'state', 'actions'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatPaginator, { static: true })
  // paginator!: MatPaginator;

  constructor(

    //Inyectamos nuestro servicio.
    private SupplierService:SupplierService,

    //Inyectamos el router.
    private router:Router,

    private alertas:AlertasService

  ) { }

  closeResult = '';

  filterSupplier = '';

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [10, 20, 30, 40, 50];
  lengthTable!: number

  totalRecords!: number;

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;

    //valor por defecto del id para evitar el error de campos vacíos al iniciar el padre (crud-users.component) sin el hijo (modal-users.component).
    // this.parentMessage = "1";

    //Obtenemos todos los pacientes.
    this.SupplierService.getAllSuppliers(1).subscribe(data=>{
      //recibimos por consola los datso que nos esté trayendo.


      //Llamamos a la variable que creamos arriba para asignarle los datos que hay en la variable data.
      this.proveedores = data;
      // ELEMENT_DATA = data;
      // console.log(ELEMENT_DATA);

      })
  }

  editarProveedor(id:number){

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

  cambioEstado(estado:number,id:number){
    console.log(estado)
    if (estado == 1) {

      //Llamamos al servicio para solicitar una sola persona y poder editar el estado sin cambiar el resto de datos de la cuenta.
      this.SupplierService.getSingleSupplier(id).subscribe((data:any) =>{

      //asignamos el valor que venga desde la API a una variable para poder recorrerla.
      this.datosProveedor = data[0];

      this.datosProveedor.estado= 2;

      let token = localStorage.getItem('token');

      this.datosProveedor.token = token;

      this.SupplierService.putSupplier(this.datosProveedor).subscribe((data:any) =>{
        // console.log(data);
        let respuesta:ResponseI = data;
        //Verificamos si la respuesta es exitosa.
        if(respuesta.status == 'ok'){
          this.alertas.showSuccess('Proveedor cambiado de estado','cambio exitoso');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
        }else{
          this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
        }
      });


    });

    }else{

        //Llamamos al servicio para solicitar una sola persona y poder editar el estado sin cambiar el resto de datos de la cuenta.
        this.SupplierService.getSingleSupplier(id).subscribe((data:any) =>{

        //asignamos el valor que venga desde la API a una variable para poder recorrerla.
        this.datosProveedor = data[0];

        this.datosProveedor.estado= 1;

        let token = localStorage.getItem('token');

        this.datosProveedor.token = token;
        console.log(this.datosProveedor)
        this.SupplierService.putSupplier(this.datosProveedor).subscribe((data:any) =>{
          // console.log(data)
          let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Proveedor cambiado de estado','cambio exitoso');
              setTimeout(() => {
                window.location.reload();
              }, 2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
          }

        });

      });

    }

  }

}
