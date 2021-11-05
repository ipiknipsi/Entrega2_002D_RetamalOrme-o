import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { User } from '../interfaces/user.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public isLogged: any = false;




  constructor(public afAuth: AngularFireAuth) { 


    afAuth.authState.subscribe(user => (this.isLogged = user));
    }




//metodo para el login

    async onLogin (user: User) {


      try{
        return await this.afAuth.signInWithEmailAndPassword(user.email, user.password)
        



      }
      catch(error){
        console.log('Error al iniciar sesión',error);
      }


    } 









//metodo para registrarse

async onRegister(user: User){
try{
  return await this.afAuth.createUserWithEmailAndPassword(user.email,user.password)

}catch(error){
  console.log('Error al registrarse!', error)
  }



      }
    
    
}












