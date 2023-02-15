import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  template : "<p> The hero's birthday is {{birthday | date}}</p>"
})
export class PipesComponent {
  title= 'OneConversion';
  user ={
    userId:20,
    firstName: 'ARC',
    lastName: 'Tech',
    DOB: '07/07/2017',
    salary:12000.23
  };
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  

}
