import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { Facebook } from 'ionic-native';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
private authState: FirebaseAuthState;


//   constructor(public auth$: AngularFireAuth, private platform: Platform) {
//     this.authState = auth$.getAuth();
//     auth$.subscribe((state: FirebaseAuthState) => {
//       this.authState = state;
//     });
//   }

//   get authenticated(): boolean {
//     return this.authState !== null;
//   }

//   signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
//     if (this.platform.is('cordova')) {
//       return Facebook.login(['email', 'public_profile']).then(res => {
//         const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
//         return firebase.auth().signInWithCredential(facebookCredential);
//       });
//     } else {
//       return this.auth$.login({
//         provider: AuthProviders.Facebook,
//         method: AuthMethods.Popup
//       });
//     }

//   }

//   signOut(): void {
//     this.auth$.logout();
//   }

//   displayName(): string {
//     if (this.authState != null) {
//       return this.authState.facebook.displayName;
//     } else {
//       return '';
//     }
//   }
}