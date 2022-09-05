import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-registrarme',
  templateUrl: './registrarme.page.html',
  styleUrls: ['./registrarme.page.scss'],
})
export class RegistrarmePage implements OnInit {
  user: User = new User();

  constructor( private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async registrarme(){
    const user = await this.authSvc.onRegister(this.user);
    if (user){
      console.log('Usuario creado correctamente!');
      this.router.navigateByUrl('/login')
    }
  }
}
