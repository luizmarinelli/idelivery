import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
