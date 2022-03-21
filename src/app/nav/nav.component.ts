import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  //encapsulation:ViewEncapsulation.Emulated
  // template:'<h1> ტექსტი </h1>',
  // styles:['h1{color:red}']
})
export class NavComponent implements OnInit {
  logo = "assets/img/logo.png";
  myclass = false
  constructor() { }

  ngOnInit(): void {

  }

  logos(){
    this.logo = "assets/img/starbucks.png"
  }

}
