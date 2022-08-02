import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { FirstStepComponentComponent } from './modules/home/pages/login-module/signup-page/first-step-component/first-step-component.component';
import { FourthStepComponentComponent } from './modules/home/pages/login-module/signup-page/fourth-step-component/fourth-step-component.component';
import { SecondStepComponentComponent } from './modules/home/pages/login-module/signup-page/second-step-component/second-step-component.component';
import { SignupPageComponent } from './modules/home/pages/login-module/signup-page/signup-page.component';
import { ThirdStepComponentComponent } from './modules/home/pages/login-module/signup-page/third-step-component/third-step-component.component';
import { LoginComponentComponent } from './modules/home/pages/login-module/welcome-page/login-component/login-component.component';
import { SignupComponentComponent } from './modules/home/pages/login-module/welcome-page/signup-component/signup-component.component';
import { WelcomeComponentComponent } from './modules/home/pages/login-module/welcome-page/welcome-component/welcome-component.component';
import { WelcomePageComponent } from './modules/home/pages/login-module/welcome-page/welcome-page.component';
import { AddDoctorPageComponent } from './modules/home/pages/pages/doctors/add-doctor-page/add-doctor-page.component';
import { DoctorsPageComponent } from './modules/home/pages/pages/doctors/doctors-page/doctors-page.component';
import { DoctorsComponent } from './modules/home/pages/pages/doctors/doctors.component';
import { EditDoctorPageComponent } from './modules/home/pages/pages/doctors/edit-doctor-page/edit-doctor-page.component';
import { HomePageComponent } from './modules/home/pages/pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome-page' },

  {
    path: 'welcome-page',
    component: WelcomePageComponent,
    children: [
      {
        path: '',
        component: WelcomeComponentComponent,
      },
      {
        path: 'login',
        component: LoginComponentComponent,
      },
      {
        path: 'signup',
        component: SignupComponentComponent,
      },
    ],
  },
  {
    path: '',
    component: SignupPageComponent,
    children: [
      {
        path: 'first-step-page',
        component: FirstStepComponentComponent,
      },
      {
        path: 'second-step-page',
        component: SecondStepComponentComponent,
      },
      {
        path: 'third-step-page',
        component: ThirdStepComponentComponent,
      },
      {
        path: 'fourth-step-page',
        component: FourthStepComponentComponent,
      },
    ],
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home-page',
        component: HomePageComponent,
      },
      {
        path: 'doctors',
        component: DoctorsComponent,
        children: [
          {
            path: '',
            redirectTo: 'list-doctors',
            pathMatch: 'full',
          },
          {
            path: 'list-doctors',
            component: DoctorsPageComponent,
          },
          {
            path: 'add-doctor',
            component: AddDoctorPageComponent,
          },
          {
            path: 'edit-doctor',
            component: EditDoctorPageComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
