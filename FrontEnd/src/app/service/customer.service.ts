import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Customer} from '../model/customer';
import {of} from 'rxjs/observable/of';

export const customers: Customer[] = [
  {
    id: 'C001',
    name: 'Ranjith Suranga',
    address: 'Embilipitiya',
    salary: 500.00
  },
  {
    id: 'C002',
    name: 'Ranjith Upul',
    address: 'Markola',
    salary: 700.00
  },
  {
    id: 'C003',
    name: 'Kavish Manjitha',
    address: 'Nugegoada',
    salary: 800.00
  },
  {
    id: 'C004',
    name: 'Ashan Tharuka',
    address: 'Kaluthara',
    salary: 900.00
  },
  {
    id: 'C005',
    name: 'Kasun Sanduruwan Vithanage',
    address: 'Galle',
    salary: 1000.00
  }
];

const host = 'http://localhost:8080/api/crud-hibernate/v1/customer/';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  public fetchAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(host + 'find-all');
  }

}
