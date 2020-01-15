import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatRippleModule } from '@angular/material';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideOptionsComponent } from './side-options/side-options.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    SideMenuComponent,
    SideOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
