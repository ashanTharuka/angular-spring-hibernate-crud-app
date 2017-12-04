import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-fetch-all',
  templateUrl: './fetch-all.component.html',
  styleUrls: ['./fetch-all.component.css']
})
export class FetchAllComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadAllData();
  }

  loadAllData(): void {
    this.customerService.fetchAllCustomers().subscribe(
      (response) => {
        this.customers = response;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

}
