import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent implements OnInit {
  signupForm!: FormGroup


  constructor(private formBuilder: FormBuilder){}
  

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(18), Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      city:['',[Validators.required, Validators.minLength(3), Validators.maxLength(18), Validators.pattern('^[a-zA-Z]+$')]],
      country:['',[Validators.required, Validators.minLength(3), Validators.maxLength(18), Validators.pattern('^[a-zA-Z]+$')]]
    })
  }
  signUp() {
    console.log(this.signupForm.value)

  }



}



