import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IEmployeeStore } from '../employeestore/employee_reducer';

@Component({
  selector: 'app-employeeinformation',
  templateUrl: './employeeinformation.component.html',
  styleUrls: ['./employeeinformation.component.scss']
})
export class EmployeeinformationComponent implements OnInit {

 //For getting the employee details object

 empid: number;
 storeSubscription: Subscription;
  empdetails: object;
 constructor(
   private myService: ApiService, private router: Router, private route: ActivatedRoute
   ,
   private store: Store<{ EmpList: IEmployeeStore }>) { }

 ngOnInit() {
   // this.empdetails = this.myService.selectedData;
   this.empid = this.route.snapshot.params.id
   this.storeSubscription = this.store.select('EmpList').subscribe(data => {
     this.empdetails = data.data[this.empid];
   });
 }
 goBack() {
   this.router.navigate(['/dashboard']);
 }

}
