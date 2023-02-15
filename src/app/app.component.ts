import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_1.1';
  clsName ='one'
  clsName2 ='two'

  color = ''
  colorVal = 'blue'; // dynamic value to DOM elements
  users =[
    {userId:10, firstName:'jenny'},
    {userId:20, firstName:'joe'},
    {userId:30, firstName:'jane'},
    {userId:40, firstName:'jim'},
    {userId:50, firstName:'jill'},
    {userId:60, firstName:'josh'},
    {userId:70, firstName:'jerry'},
    {userId:80, firstName:'jessica'}
  ];
  
  switchValue:any= "three";
  switch_users =[
    {id:1 ,'name':'john'},
    {id:2 ,'name':'jane'},
    {id:3 ,'name':'jim'},
  ];




  showMsg = false;
  btnshow(){
   this.showMsg = !this.showMsg;
  }


}
