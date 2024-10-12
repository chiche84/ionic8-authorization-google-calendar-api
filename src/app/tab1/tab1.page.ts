import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { logoGoogle } from 'ionicons/icons';
import { Browser } from '@capacitor/browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  http: HttpClient;

  constructor(http: HttpClient) {
    addIcons({ logoGoogle});
    this.http = http;
  }

  AbriroAuthWeb(){
    //configuro la redirectUri para que sea una de mi backend (ahi recibo el codigo que pedi)
    //en el backend solicito el access_token de autorization para poder utilizar la api del scope que le pase: calendar
    const clientId = '123456789-wqertywqerty.apps.googleusercontent.com';
    const redirectUri = 'https://145e-2803-9800-9500-757f-f1ef-f466-a9a8-c6eb.ngrok-free.app/api/Google/signin-google'; //url de mi backend que labura con el code
    const responseType = 'code';
    const scope = 'https://www.googleapis.com/auth/calendar';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&access_type=offline`;
    
    //se usa esto para la opcion 3, la mejor y mas segura para web
    window.addEventListener('message', (event) => {
      console.log("MENSAJE TOKENNN tab1: ", event);
      localStorage.setItem("safe_token", event.data.token);
      window.location.href = 'http://localhost:8100/main-page';
    });

    // Para opcion 3 de web, opcion de msj (asi tengo la referencia a window.opener para enviar el msj desde el back)
    window.open(authUrl);

    // Redirigir al usuario a Google (para opciones 1 y 2 de back)
    //window.location.href = authUrl;
  }


  async AbriroAuthAndroid(){
    const clientId = '123456789-wqertywqerty.apps.googleusercontent.com';
    const redirectUri = 'https://145e-2803-9800-9500-757f-f1ef-f466-a9a8-c6eb.ngrok-free.app/api/Google/signin-google'; //url de mi backend que labura con el code
    const responseType = 'code';
    const scope = 'https://www.googleapis.com/auth/calendar';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&access_type=offline`;
  
    // Abre el navegador para iniciar sesión
    await Browser.open({ url: authUrl });


    // Escucha la redirección a la URI especificada
    Browser.addListener('browserFinished', () => {
        // Verifica si la URL es la correcta
        console.log("SE CERRROOOOOOOOOOOOOOO");
    });
  }
  
}
