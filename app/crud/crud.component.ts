import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  newEmployeeClicked = false;

  employees = [
    { name: 'Kevin', daysWorked: '240' ,vactionDays:'10'},
    { name: 'Michael', daysWorked: '240' ,vactionDays:'10'},
    { name: 'Neil', daysWorked: '240' ,vactionDays:'10'}
  ];

  color;

  constructor() { }

  ngOnInit() {

  }

  model: any = {};
  model2: any = {}; 

  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
  }

  deleteEmployee(i) {
    this.employees.splice(i);
    console.log(i);
  }

  myValue;

  editEmployee(editEmployeeInfo) {
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.daysWorked = this.employees[editEmployeeInfo].daysWorked;
    this.model2.vactionDays = this.employees[editEmployeeInfo].vactionDays;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    let editEmployeeInfo = this.myValue;
    for(let i = 0; i < this.employees.length; i++) {
      if(i == editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
  }





  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

   changeColorOne() {
     this.color = !this.color;
     if (this.color) {
       return '#ffffff';
     } else {
      return '#f6f6f6';
     }
  }


}