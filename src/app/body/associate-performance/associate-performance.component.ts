import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-associate-performance',
  templateUrl: './associate-performance.component.html',
  styleUrls: ['./associate-performance.component.css']
})


export class AssociatePerformanceComponent implements OnInit {

  associates = ['Mohamed Shabbir', 'Raviraj Nagime', 'Raees Sayyed'];
  sales;

  constructor(private apiService: ApiService) { 

    this.apiService.getMonthToDate().subscribe((data) => {

      this.sales = data;
      // console.log('Individual Associate sales component data: ' + this.sales);

    });

  }

  ngOnInit() {
  }

  getAssociatePerformance(associate, data) {
    
    // console.log('"associate" variable at start of getAssociatePerformance(): '+ associate);
    // console.log('"data" variable aty start of getAssociatePerformance(): ' + data);


  }
}
