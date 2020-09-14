import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService : AuthService,
    private router : Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

      const authenticated = this.authService.isAuthenticated();

      if(authenticated){
        return true;
      } else {
        this.router.navigate(['/login']);
        return false
      }
    }
  
}
