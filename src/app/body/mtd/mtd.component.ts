import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-mtd',
  templateUrl: './mtd.component.html',
  styleUrls: ['./mtd.component.css']
})
export class MtdComponent implements OnInit {

  items;
  mtdScore = 0;

  constructor(private apiService: ApiService) { 

    console.log('Constructor Type Of mtdScore: ' + this.mtdScore)
    
    this.apiService.getMonthToDate().subscribe((data)=>{
      //console.log(data);

      this.items = data;
      //console.log(this.items);
      this.calculateMtd(this.items);
    });

    console.log(this.items);


  }

  ngOnInit() {

  }

  calculateMtd(items) {

    for (let item in items) {
      this.mtdScore += parseFloat(items[item]['GrossTotalAmount']);
    }

    console.log('MTD Score: ' + this.mtdScore);

  }

}
