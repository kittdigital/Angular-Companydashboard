import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  today = new Date();
  yyyy = this.today.getFullYear();
  mm = String(this.today.getMonth() + 1).padStart(2, '0');
  dd = String(this.today.getDate()).padStart(2, '0');
  currentDate = this.yyyy + '-' + this.mm + '-' + this.dd;
  monthStart = this.yyyy + '-' + this.mm + '-01';
  todayUrl = 'https://app.ngageapp.com/new_backend/app_monitor/Reports/crm/CRM_Sales_Order_ReportByDate.php?fromDate=' + this.currentDate + '&toDate=' + this.currentDate;
  mtdUrl = 'https://app.ngageapp.com/new_backend/app_monitor/Reports/crm/CRM_Sales_Order_ReportByDate.php?fromDate=' + this.monthStart + '&toDate=' + this.currentDate;

  constructor(private httpClient: HttpClient) { }

  public getTodaySales() {
    return this.httpClient.get(this.todayUrl);
  }

  public getMonthToDate() {
    return this.httpClient.get(this.mtdUrl);
  }
}


