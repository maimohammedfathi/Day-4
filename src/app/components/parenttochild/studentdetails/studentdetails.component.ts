import { Component, Input } from '@angular/core';
import { IStudent } from 'src/app/interfaces/istudent';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css'],
})
export class StudentdetailsComponent {
  @Input()
  student: IStudent= {
    name: '',
    address: '',
    school: '',
    age : 0,
  };
}
