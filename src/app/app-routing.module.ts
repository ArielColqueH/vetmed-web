import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { SignupPageComponent } from './modules/home/pages/login-module/signup-page/signup-page.component';
import { WelcomePageComponent } from './modules/home/pages/login-module/welcome-page/welcome-page.component';
import { HomePageComponent } from './modules/home/pages/pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/signup-page' },
  {
    path: 'welcome-page',
    component: WelcomePageComponent,
  },
  {
    path: 'signup-page',
    component: SignupPageComponent,
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home-page',
        component: HomePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
