import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth ) { }

  registeruser(email:string, pass:string){
    return new Promise((res, rej) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then( userData => res(userData),
          err => rej(err));
    })
  }

  loginEmail(email:string, pass:string){
    return new Promise((res, rej) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then( userData => res(userData),
          err => rej(err));
    })
  }

  getAuth(){
    return this.afAuth.authState.map( auth => auth);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
}
