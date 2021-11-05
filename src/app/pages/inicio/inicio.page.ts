import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente{
  icon: string;
  name: string;
  redirecTo: string;


}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  
})
export class InicioPage implements OnInit {
  @ViewChild("header") header: HTMLElement;

  componentes : Componente[] = [
    {
      icon: 'home-outline',
      name: 'Registrarse',
      redirecTo: '/formulario',
      
    },
    {
      icon: 'storefront-outline',
      name: 'Publicar',
      redirecTo: '/publicar',
      

    },
    {
      icon: 'terminal-outline',
      name: 'Formulario',
      redirecTo: '/publicar',
     
    },
    {
      icon: 'chatbox-outline',
      name: 'Mensajes',
      redirecTo: '/inicio'
    },
    {
      icon: 'bhelp-circle-outline',
      name: 'Ayuda',
      redirecTo: '/inicio'
    },
    
    {
      icon: 'apps-outline',
      name: 'Api',
      redirecTo: '/api'
    },
    {
      icon: 'apps-outline',
      name: 'Datos',
      redirecTo: '/datos'
    },
    {
      icon: 'apps-outline',
      name: 'Login',
      redirecTo: '/login'
    },
    {
      icon: 'person-add-outline',
      name: 'Registro',
      redirecTo: '/registro'
    },

  ];
  




  constructor(private menuController: MenuController, public element: ElementRef,public renderer: Renderer2) { 
    
    


  }

  ngOnInit() {
  }


  mostrarMenu()
  {
    this.menuController.open('first')
  }


  
//estudiar scroll events.

  /*
  
  ionViewWillEnter() {
    this.renderer.setStyle(this.header['el'], 'webkitTransition', 'top 700ms');
  }
  
  
  
  
  
  onContentScroll(event) {
    if (event.detail.scrollTop >= 50) {
      this.renderer.setStyle(this.header['el'], 'top', '-76px');
    } else {
      this.renderer.setStyle(this.header['el'], 'top', '20px');
    }
  }*/




}
