import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth) {}

  cerrarSeccion(){
    console.log("Seccion Cerrada!");
    this.afAuth.auth.signOut();
    this.router.navigateByUrl("/login");
  }
}
