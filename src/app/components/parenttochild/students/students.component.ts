import { Component } from '@angular/core';
import { IStudent } from 'src/app/interfaces/istudent';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students : IStudent[]=[
    {name:'tasneem',age:22 , school:'fci' , address:'minia'},
    {name:'hager',age:24 , school:'nub' , address:'alex'},
    {name:'ayman',age:27 , school:'auc' , address:'minia'},
    {name:'zain',age:2 , school:'fci' , address:'minia'}, 
  ]

}
