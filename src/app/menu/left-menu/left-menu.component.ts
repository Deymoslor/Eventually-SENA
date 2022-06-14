import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { IleftNavMenu } from 'src/app/core/ui/ILeftNavMenu.interface';
import { ROLES_ENUM } from '../../constants/roles.enum';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  public acceso:string = "ADMIN";
  @Input() data!: IleftNavMenu;

  constructor(

    private authService: AuthService,
    private router: Router,
  ) { }

  hasPermission(r: ROLES_ENUM[] | undefined): boolean {
    if (r) {
      return this.authService.hasAccessToModule(r);
    }
    return true;
  }

  permisos(r: string[]): boolean {
    return this.authService.permisos(r);
  }

  ngOnInit(): void {
  }


  //invitado
  homeInvitado(){
    this.router.navigate(["/main/landingVisit"]);
  }
  myAccount(){
    this.router.navigate(["main/settings/user-account"]);
  }
  groups(){
    this.router.navigate(["main/groups"]);
  }

  // Proveedor
  myService(){
    this.router.navigate(["main/landingProv"]);
  }
  homeProveedor(){
    this.router.navigate(["main/provider/myService"]);
  }

  // createService(){
  //   this.router.navigate(["main/provider/createService"]);
  // }
  //Admin
  homeAdmin(){
    this.router.navigate(["dashboard/landingAdmin"]);
  }
  groupsDash(){
    this.router.navigate(["dashboard/groups"]);
  }
  servicesDash(){
    this.router.navigate(["dashboard/services"]);
  }
  reportsDash(){
    this.router.navigate(["dashboard/reports"]);
  }
  UsersDash(){
    this.router.navigate(["dashboard/users"]);
  }
  suppliersDash(){
    this.router.navigate(["dashboard/suppliers"]);
  }
  gustosDash(){
    this.router.navigate(["dashboard/likes"]);
  }
  requestsDash(){
    this.router.navigate(["dashboard/requests"]);
  }
  eventsDash(){
    this.router.navigate(["dashboard/events"]);
  }
}

