import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';






@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSvc: AuthService,private router: Router, private toastController: ToastController){


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | 
    UrlTree> | boolean | UrlTree {
      if(this.authSvc.isLogged) {
      return true;
      }else{
      console.log('Debe iniciar Sesión')
      this.router.navigateByUrl('/login');
      this.showToast('DEBE INICIAR SESIÓN');
      return false;
  }
   
  }
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }
  
}
