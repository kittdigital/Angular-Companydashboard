import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatPaginator } from '@angular/material';

import * as $ from 'jquery';
declare var jQuery:any;

@Component({
  selector: 'app-mtd',
  templateUrl: './mtd.component.html',
  styleUrls: ['./mtd.component.css']
})
export class MtdComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  items;
  mtdScore = 0;



  constructor(private apiService: ApiService) { 
    // let basic = document.getElementById("dtBasicExample") as HTMLLinkElement;

    // $(basic).style="display: none;";


    // $(document).ready(function () {
    //   $('#dtBasicExample').DataTable({
    //     "pagingType": "simple" // false to disable pagination (or any other option)
    //   });
    //   $('.dataTables_length').addClass('bs-select');
    // });

    console.log('Constructor Type Of mtdScore: ' + this.mtdScore)
    
    this.apiService.getMonthToDate().subscribe((data)=>{
    
      this.items = data;
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
