import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;

}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'person-outline',
      name: 'Registrarse',
      redirecTo: '/formulario'
    },
    {
      icon: 'storefront-outline',
      name: 'Compra/Venta',
      redirecTo: '/publicar'
    },
    {
      icon: 'terminal-outline',
      name: 'Formulario',
      redirecTo: '/formulario'
    },
    {
      icon: 'chatbox-outline',
      name: 'Mensajes',
      redirecTo: '/inicio'
    },
    {
      icon: 'help-circle-outline',
      name: 'Ayuda',
      redirecTo: '/inicio'
    },
    {
      icon: 'heart-half-outline',
      name: 'Feriados',
      redirecTo: '/api'
    },
    {
      icon: 'apps-outline',
      name: 'Datos',
      redirecTo: '/datos'
    },
    {
      icon: 'log-in-outline',
      name: 'Login',
      redirecTo: '/login'
    },
    {
      icon: 'person-add-outline',
      name: 'Registrarse',
      redirecTo: '/registro'
    }
    


    

  ];


}
