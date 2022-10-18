import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-methods',
  templateUrl: './life-cycle-methods.component.html',
  styleUrls: ['./life-cycle-methods.component.css']
})
export class LifeCycleMethodsComponent implements OnInit{
@Input() user:string='';
@Input() item:string='';
  constructor() {
    console.log('constructor called');
    
   }
   ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    console.log('on changed called'); 
  }

  ngOnInit(): void {
    console.log('ngOnInit called'); 
  }

  ngDoCheck(){
   console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called'); 
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
    
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
    
  }
}
