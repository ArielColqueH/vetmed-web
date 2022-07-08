import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from 'src/app/layout/main/main.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { SidenavComponent } from 'src/app/layout/sidenav/sidenav.component';
import { SubsidenavComponent } from 'src/app/layout/subsidenav/subsidenav.component';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomePageComponent } from './pages/pages/home-page/home-page.component';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { HomeComponent } from './home.component';
import { WelcomePageComponent } from './pages/login-module/welcome-page/welcome-page.component';
import { LoginComponentComponent } from './pages/login-module/welcome-page/login-component/login-component.component';
import { SignupComponentComponent } from './pages/login-module/welcome-page/signup-component/signup-component.component';
import { WelcomeComponentComponent } from './pages/login-module/welcome-page/welcome-component/welcome-component.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    HeaderComponent,
    SidenavComponent,
    SubsidenavComponent,
    HomePageComponent,
    LayoutComponent,
    WelcomePageComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    WelcomeComponentComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NoopAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
  ],
})
export class HomeModule {}
