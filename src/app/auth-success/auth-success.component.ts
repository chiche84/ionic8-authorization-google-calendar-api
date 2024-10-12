import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-success',
  templateUrl: './auth-success.component.html',
  styleUrls: ['./auth-success.component.scss'],
  standalone: true
})
export class AuthSuccessComponent  implements OnInit {

  constructor(private route: ActivatedRoute) {  
   }

  ngOnInit(): void {
    //Para web (opcion 1) esto funciona de 10:
    // Obtener el token de la URL
    // this.route.queryParams.subscribe(params => {
    //   const token = params['token'];
    //   console.log("PASO POR EL AUTH CON TOKEN::: ", token)
    //   if (token) {
    //     // Guardar el token en localStorage
    //     localStorage.setItem('access_token', token);

    //     // Cerrar la ventana actual o redirigir a otra página
    //     //window.close(); // Cierra la ventana actual (si fue un popup)
    //     window.location.href = '/main-page'; // O redirige a otra página
    //   }
    // });
    //opcion 2 no necesita esto porque ya guarda en el local storage automaticamente al volver (back devuelve un script)
  }

}
