import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = new FormControl();
  email = new FormControl();
  text  = new FormControl();

  get titles(){
    return this.title.get('title')
  }

  getData( ){
   console.log(this.title.value , this.email.value ,this.text.value)
  
  }  

}
