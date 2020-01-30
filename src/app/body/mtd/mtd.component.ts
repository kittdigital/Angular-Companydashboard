import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';



// declare var jQuery:any;

@Component({
  selector: 'app-mtd',
  templateUrl: './mtd.component.html',
  styleUrls: ['./mtd.component.css']
})


export class MtdComponent implements OnInit {
  filtersLoaded: Promise<boolean>;
  items;
  mtdScore = 0;
  dtOptions: DataTables.Settings = {};
  orders = 0;

  constructor(private apiService: ApiService) { 

    // console.log('Constructor Type Of mtdScore: ' + this.mtdScore)
    this.apiService.getMonthToDate().subscribe((data)=>{
    
      this.items = data;
      this.filtersLoaded = Promise.resolve(true);
      this.calculateMtd(this.items);

      console.log(this.items);
    });
    
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  

  calculateMtd(items) {

    for (let item in items) {
      this.mtdScore += parseFloat(items[item]['GrossTotalAmount']);
     this.orders++;
    }

    console.log('MTD Score: ' + this.mtdScore);

  }

}
