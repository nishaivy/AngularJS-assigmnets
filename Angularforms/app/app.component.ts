import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'lchooks';
  // showComponent=true;
  // userData='leela';
  // itemData='items';
  
  loginForm=new FormGroup({
    user:new FormControl('nbhhbh '),
    password:new FormControl(' nbvgviuh'),
  })

  loginUser(){
    console.log(this.loginForm.value);
    
  }

  // onChangeData(){
  //   this.userData='user value changed'
  // }
  // ondestroy(){
  //   this.showComponent=false;
  // }



}
