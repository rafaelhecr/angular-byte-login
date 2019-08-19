import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from  'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor( 
    public authService: AuthService,
    public router:Router,
    public flashMessage: FlashMessagesService 
    ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registeruser(this.email, this.password)
      .then( res =>  {
        this.flashMessage.show('Usuario Creado Correctamente', { cssClass: 'alert-success', timeout: 2000});
        this.router.navigate(['/privado'])
      })
      .catch( err => {
        console.log('Error: ' + err)
      })
  }

}
