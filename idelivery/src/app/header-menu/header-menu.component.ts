import { Component, OnInit } from '@angular/core';
import { faPizzaSlice, faHamburger, faAppleAlt, faHotdog, faFish } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  sideMenu: boolean = false;
  sideOption: boolean = true;

  pizza = faPizzaSlice;
  burger = faHamburger;
  hotdog = faHotdog;
  apple = faAppleAlt;

  constructor() { }

  ngOnInit() {
  }

  openMenu(){
    if(!this.sideMenu){
      this.sideMenu = true;
    } else {
      this.sideMenu = false;
    }
  }

  openOpcoes(){
    if(!this.sideOption){
      this.sideOption = true;
    } else {
      this.sideOption = false;
    }
  }

}
