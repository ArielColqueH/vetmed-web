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

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    HeaderComponent,
    SidenavComponent,
    SubsidenavComponent,
    HomePageComponent,
    LayoutComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
  ],
})
export class HomeModule {}
