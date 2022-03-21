import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ContactForm = new FormGroup({
    title: new FormControl(),
    email: new FormControl(),
    text : new FormControl()
  })

 

  get title(){
    return this.ContactForm.get('title')
  }

  get email(){
    return this.ContactForm.get('email')
  }

  get text(){
    return this.ContactForm.get('text')
  }

  getData( ){
   console.log(this.ContactForm.value)
  
  }  

}
