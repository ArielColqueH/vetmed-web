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
import { SignupPageComponent } from './pages/login-module/signup-page/signup-page.component';
import { NavbarComponentComponent } from './pages/login-module/signup-page/navbar-component/navbar-component.component';
import { FirstStepComponentComponent } from './pages/login-module/signup-page/first-step-component/first-step-component.component';
import { SecondStepComponentComponent } from './pages/login-module/signup-page/second-step-component/second-step-component.component';
import { ThirdStepComponentComponent } from './pages/login-module/signup-page/third-step-component/third-step-component.component';
import { FourthStepComponentComponent } from './pages/login-module/signup-page/fourth-step-component/fourth-step-component.component';
import { AddDoctorPageComponent } from './pages/pages/doctors/add-doctor-page/add-doctor-page.component';
import { EditDoctorPageComponent } from './pages/pages/doctors/edit-doctor-page/edit-doctor-page.component';
import { DoctorsComponent } from './pages/pages/doctors/doctors.component';
import { SettingsComponent } from './pages/pages/settings/settings.component';
import { EditSettingsComponent } from './pages/pages/settings/edit-settings/edit-settings.component';
import { ListSettingsComponent } from './pages/pages/settings/list-settings/list-settings.component';
import { RecordsComponent } from './pages/pages/records/records.component';
import { OwnerProfileRecordComponent } from './pages/pages/records/owner-profile-record/owner-profile-record.component';
import { ListRecordsComponent } from './pages/pages/records/list-records/list-records.component';
import { DoctorsPageComponent } from './pages/pages/doctors/doctors-page/doctors-page.component';

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
    SignupPageComponent,
    NavbarComponentComponent,
    FirstStepComponentComponent,
    SecondStepComponentComponent,
    ThirdStepComponentComponent,
    FourthStepComponentComponent,
    AddDoctorPageComponent,
    EditDoctorPageComponent,
    DoctorsComponent,
    SettingsComponent,
    EditSettingsComponent,
    ListSettingsComponent,
    RecordsComponent,
    OwnerProfileRecordComponent,
    ListRecordsComponent,
    DoctorsPageComponent,
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
