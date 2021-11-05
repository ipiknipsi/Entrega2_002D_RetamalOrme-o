import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { ToastController} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user: User = new User();

  // token = 'usuario1';
  constructor(private router: Router, private authSvc: AuthService,
    private toastController: ToastController) { }

  ngOnInit() {
  }



  async onLogin(){

    const user = await this.authSvc.onLogin(this.user);
    if(user){
      console.log('Inicio de sesión exitoso!', )
      this.showToast('Bienvenido Lind@ Pechoch@');
      this.router.navigateByUrl('/');

    }

  }
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }

  /* onLogin(){
    localStorage.setItem('token', this.token)
  } */

}
