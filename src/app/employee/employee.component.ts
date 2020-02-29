import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  Name = 'John';
  Country = 'USA';
  Mobile = 6854328970;
  Email = 'john.smith@gmail.com';
  Age = 33;
  Designation = 'Software Engineer';

  constructor() { }

  ngOnInit() {
  }

}
