import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
// import { AuthService } from '../providers/auth-service';

export const firebaseConfig = {
  apiKey: "AIzaSyDb2lBaim48zI1V7-ohlylUtSkEK94Z_OA",
  authDomain: "resas-e4743.firebaseapp.com",
  databaseURL: "https://resas-e4743.firebaseio.com",
  storageBucket: "resas-e4743.appspot.com",
  messagingSenderId: "938652048619"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]//,AuthService
})
export class AppModule {}
