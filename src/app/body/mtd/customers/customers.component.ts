import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  items;

  constructor(private apiService: ApiService) { 

    
  }

  ngOnInit() {
  }

}
