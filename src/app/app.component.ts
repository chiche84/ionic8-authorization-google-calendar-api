import { Component, NgZone } from '@angular/core';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private zone: NgZone) {
    this.initializeApp();   
  }
 

  initializeApp() {
    //solo para ionic:
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      console.log('App opened with URL:', event);

        this.zone.run(() => {
            console.log("URL ",event.url );
            //aca debo controlar si la url es la de la autenticacion... hacer lo de guardar el token y demas cosas que quiera hacer
        });
    });
}
}
