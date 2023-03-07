import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';
import { DashboardService } from 'src/app/services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailpanel',
  templateUrl: './detailpanel.component.html',
  styleUrls: ['./detailpanel.component.css']
})
export class DetailpanelComponent {
  @ViewChild('default_dashboard')
  public dashboard: DashboardLayoutComponent;
  constructor( private _dashboard: DashboardService, private _act: ActivatedRoute ) {
      
  }
  public count: number =0;
  public cellSpacing: number[] = [10, 10];

  myDash: any;
  id: any;
  panelId :any;


  onCloseIconHandler(event: any): void {
      if ((<HTMLElement>event.target).offsetParent) {
          this.dashboard.removePanel((<HTMLElement>event.target).offsetParent.id);
      }
  }






  ngOnInit(): void {
   
    this.id = this._act.snapshot.paramMap.get('id');
    this.panelId = this._act.snapshot.paramMap.get('panel');

    this._dashboard.getbyid(this.id)
      .subscribe({
        next: (res)=>{
          this.myDash = res;
          if(this.myDash.panels.length > 0){
            for(let p of this.myDash.panels){
            
              if( p.id == this.panelId ){
                p.sizeX = 5;
                p.sizeY = 2;
                this.dashboard.addPanel(p);
              }
            }
          }
         
        }
      })
    
  }



}
