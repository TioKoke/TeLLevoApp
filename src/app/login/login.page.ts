import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user : User = new User();

  constructor(private navCtrl:NavController,private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async login(){
    const user = await this.authSvc.onLogin(this.user);
    if (user){
      console.log("Acesso Consedido!");
      this.router.navigateByUrl("/home")
    }
  }
  olvide(){
    this.navCtrl.navigateForward("olvide-contra");
  }
}
