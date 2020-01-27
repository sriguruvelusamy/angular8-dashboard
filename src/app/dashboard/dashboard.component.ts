import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IEmployeeStore } from '../employeestore/employee_reducer';
import { IEmployee } from '../employeestore/employee_model';
import { LoadEmployees } from '../employeestore/employee_action';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //Employee Data Object
  empdata: Object;
  //User Search Text 
  searched_text: string;
  //Filtered Search Result
  //result: string;

  result$: Subscription;
  emplistdata = [
    {
    "name": "Anbu",
    "age": "28",
    "gender": "Male",
    "phone": "9898781213",
    "email": "anbu@gmail.com",
    "imagePath": "/assets/profile/employee1.jpg"
   },
   {
    "name": "Raja",
    "age": "29",
    "gender": "Male",
    "phone": "9898781113",
    "email": "raja@gmail.com",
    "imagePath": "/assets/profile/employee2.jpg"
   },
   {
    "name": "Venkat",
    "age": "32",
    "gender": "Male",
    "phone": "9798781114",
    "email": "venkat@gmail.com",
    "imagePath": "/assets/profile/employee3.jpg"
   }
];

  constructor(
    private myService: ApiService,
    private router: Router,
    private store: Store<{ EmpList: IEmployeeStore }>) { }

  ngOnInit() {
    this.myService.getEmployees().subscribe((data: Array<IEmployee>) => {
      this.store.dispatch(new LoadEmployees(data));
    });
    this.result$ = this.store.select('EmpList').subscribe(data => {
      console.log(data);
      this.empdata = data.data;
    });
  }

  //User Search Text Function Call
  empSearch(data) {
    //console.log(data.txtSearch);
    this.searched_text = data.txtSearch;
    if (data.txtSearch != '') {
      this.empdata = this.filterData(this.searched_text);
    }
    else {
      this.empdata = this.emplistdata;
    }
  }

  filterData(searchval) {
    //Filter the values based on Name or Email Or Phone Number
    return this.emplistdata.filter(object => {
      return object['name'].toLowerCase().includes(searchval.toLowerCase()) || object['phone'].toLowerCase().includes(searchval.toLowerCase()) || object['email'].toLowerCase().includes(searchval.toLowerCase());
    });
  }


}
