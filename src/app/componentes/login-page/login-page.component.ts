import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    return this.authService.loginEmail(this.email, this.password)
      .then( (res) => {
        this.router.navigate(['/privado']);
      })
      .catch( err => {
        console.log(`error en el login ${err}`);
        this.router.navigate(['/']);
      })
  }

  onClickGoogleLogin(){
    this.authService.loginGoogle()
      .then( res => {
        this.router.navigate(['/privado']);
      })
      .catch( err => {
        console.log(`Error: ${err.message}`);
      });
  }

}
