import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';
import { DashboardService } from 'src/app/services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @ViewChild('default_dashboard')
  public dashboard: DashboardLayoutComponent;
  constructor( private _dashboard: DashboardService, private _act: ActivatedRoute ) {
      
  }
  public count: number = 0;
  public cellSpacing: number[] = [10, 10];

  myDash: any;
  id: any;
  panelId :any;

  panel : any;


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
                this.panel = p;
              }
            }
          }
         
        }
      })
    
  }


  changeTitle(e:any){

    let title = e.target.value;

    for(let item of this.myDash.panels){
      if(item.id === this.panelId){
        item.title = title;
        item.content = `
        <div class="bg-dark h-100 card" >
        <div class="card-header d-flex justify-content-center " >
          <div class="dropdown">
            <p class="dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              ${ title }
            </p>
            <ul class="dropdown-menu bg-black text-light">
              <li>
                <a class="dropdown-item" href="${'/dashboards/view'}/${this.id}/${this.count.toString()}">
                  <span class="material-symbols-outlined">
                    visibility
                  </span>
                  View
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="${'/dashboards/edit'}/${this.id}/${this.count.toString()}">
                  <span class="material-symbols-outlined">
                    edit_note
                  </span>
                  Edit
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <span class="material-symbols-outlined">
                    explore
                  </span>
                  Share
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <span class="material-symbols-outlined">
                    info
                  </span>
                  Print
                </a>
              </li>
              <hr>
              <li>
                <a class="dropdown-item close" id="close">
                  <span class="material-symbols-outlined">
                    delete
                  </span>
                  Remove
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body card-body1 d-flex justify-content-center align-items-center " style="background-color: #343232d7;" >
          <h3 style="color: #a5a5a5">
            ${
              item.type !== 'text' ? 'No ' + item.type + ' Data' :
              'Text here'
            }
          </h3>
        </div>
      </div>`;
        this.dashboard.removePanel(this.panelId);
        this.dashboard.addPanel(item);
      }
    }

  }

  changeDescription(e:any){

    let desc = e.target.value;

    for(let item of this.myDash.panels){
      if(item.id === this.panelId){
        item.description = desc;
        
        this.dashboard.removePanel(this.panelId);
        this.dashboard.addPanel(item);
      }
    }

  }


  changeType(type: any){

    for(let item of this.myDash.panels){
      if(item.id === this.panelId){
        item.type = type;
        
        item.content = `
        <div class="bg-dark h-100 card" >
        <div class="card-header d-flex justify-content-center " >
          <div class="dropdown">
            <p class="dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              ${ item.title }
            </p>
            <ul class="dropdown-menu bg-black text-light">
              <li>
                <a class="dropdown-item" href="${'/dashboards/view'}/${this.id}/${this.count.toString()}">
                  <span class="material-symbols-outlined">
                    visibility
                  </span>
                  View
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="${'/dashboards/edit'}/${this.id}/${this.count.toString()}">
                  <span class="material-symbols-outlined">
                    edit_note
                  </span>
                  Edit
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <span class="material-symbols-outlined">
                    explore
                  </span>
                  Share
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <span class="material-symbols-outlined">
                    info
                  </span>
                  Print
                </a>
              </li>
              <hr>
              <li>
                <a class="dropdown-item close" id="close">
                  <span class="material-symbols-outlined">
                    delete
                  </span>
                  Remove
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body card-body1 d-flex justify-content-center align-items-center " style="background-color: #343232d7;" >
            <h3 style="color: #a5a5a5">
              ${
                type !== 'text' ? 'No ' + type + ' Data' :
                'Text here'
              }
            </h3>
        </div>
      </div>`;

        this.dashboard.removePanel(this.panelId);
        this.dashboard.addPanel(item);
      }
    }

  }





  save(){
    
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log(this.myDash);
        
        
        this._dashboard.update( this.id, this.myDash )
          .subscribe({
            next: (res)=>{
              Swal.fire('Saved!', '', 'success')
            }
          })

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }


}
