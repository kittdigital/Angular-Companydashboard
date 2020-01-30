import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})

export class TodayComponent implements OnInit {
  subscription: Subscription;
  statusText;
  items; 
  todayScore = 0;
  orders = 0;


  constructor(private apiService: ApiService) { 

    console.log('Constructor Type Of todayScore: ' + this.todayScore)
    
    this.apiService.getTodaySales().subscribe((data)=>{
      //console.log(data);

      this.items = data;
      console.log(this.items);

      this.calculateToday(this.items);
    });



  }

  ngOnInit() {

    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.apiService.getTodaySales())
    ).subscribe(result => this.statusText = result);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  calculateToday(items) {

    for (let item in items) {
      this.todayScore += parseFloat(items[item]['GrossTotalAmount']);
      this.orders++;
      console.log(this.todayScore);
    }

    //this.todayScore = parseFloat(Math.round(this.todayScore).toFixed(2));

  };

  add100() {
    this.todayScore += 100;
  }
}
