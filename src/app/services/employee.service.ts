import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:String = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<Employee[]>{
    let employeeList: Employee[] = new Array;
    let path = this.url + "/api/v1/employees"
    var employeeProduct = this.http.get<Employee[]>(path);
    employeeProduct.subscribe(products => employeeList = products);
    return employeeProduct;
  }

  getEmployeeById(identificador:Number):Observable<Employee>{
    let path = this.url + "/api/v1/employee/" + identificador
    return this.http.get<Employee>(path);
  }
}
