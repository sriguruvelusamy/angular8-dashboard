import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   selectedData;
   constructor(private httpService: HttpClient) { }

  getEmployees() {
    return this.httpService.get('../.././assets/employees.json');
  }

}
