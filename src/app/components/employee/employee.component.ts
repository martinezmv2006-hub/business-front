import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  @Input() idEmployee:Number = 0;

  employeeList: Employee[] = new Array;

  constructor(private employeeService: EmployeeService){}

  getEmployee(){
    this.employeeList = new Array;
    if(this.idEmployee==0 || this.idEmployee==null){
      this.employeeService.getAllEmployee().subscribe(employees => this.employeeList = employees);
    }else{
      this.employeeService.getEmployeeById(this.idEmployee).subscribe(employee => this.employeeList.push(employee));
    }
  }

}
