import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';

import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = LoginPage;
  loader: any;

  constructor(public auth: AuthProvider, public loadingCtrl: LoadingController){ 

    this.presentLoading();

    this.auth.login().then((isLoggedIn) => {

      if(isLoggedIn){
        this.rootPage = HomePage
      } else {
        this.rootPage = LoginPage;
      }

      this.loader.dismiss();

    });
  }

  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Autentificando ...",
    });

    this.loader.present();

  }

}

