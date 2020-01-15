import { Component, OnInit } from '@angular/core';
import { faMoneyBillWave, faMoneyBillWaveAlt, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-options',
  templateUrl: './side-options.component.html',
  styleUrls: ['./side-options.component.css']
})
export class SideOptionsComponent implements OnInit {

  dinheiro = faMoneyBillWave;
  dinheiro2 = faMoneyBillWaveAlt;
  estrela = faStar;

  constructor() { }

  ngOnInit() {
  }

}
