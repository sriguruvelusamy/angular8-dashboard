import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeinformationComponent } from './employeeinformation/employeeinformation.component';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";
import { employeeReducer } from './employeestore/employee_reducer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeinformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ EmpList: employeeReducer })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
