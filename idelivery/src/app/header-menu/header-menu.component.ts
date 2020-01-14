import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  sideMenu: boolean = false;

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

}
