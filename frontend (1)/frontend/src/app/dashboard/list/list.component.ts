import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  dashboard: any = {
    title: '',  
    panels: []
  }

  dashboards: any;

  constructor(private _dashboard: DashboardService){

  }

  ngOnInit(): void {
    this._dashboard.all()
      .subscribe({
        next: (res)=>{
          this.dashboards = res;
        }
      })
  }

  create(){
    this._dashboard.create( this.dashboard )
      .subscribe({
        next: (res)=>{
          this.ngOnInit();
        }
      })
  }

}
