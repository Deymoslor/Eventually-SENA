import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(
    private router: Router,
    private authService: AuthService,
  ){}

  canActivate(
    //Utilizamos 2 propiedades:
    //Nos permite acceder a los datos, ya que utilizamos más adelante permisos, ver listas, detalles, editar, etc. . .
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    //Validamos que exista un usuario.
    // const currentUser = this.authService.getUser;
    const currentUser = this.authService.getUser;
    // console.log(currentUser);
    //Verificamos si existe.
    if (currentUser) {
      if (next.data.roles && !this.authService.hasAccessToModule(next.data.roles)) {
        this.router.navigate(["/groups"]);
        return false;
      }
      //En caso de existir devolvemos true.
      return true;
    }
    //En caso de no exisitr lo enviamos al login.
    this.router.navigate(["loginRegister/login"]);
    return false;
  }

}
