import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
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

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot

  ){
    const currentUser = this.authService.getUser;

    if (currentUser){
      this.router.navigate(['groups']);
      return false;
    }
    return true;
  }

}
