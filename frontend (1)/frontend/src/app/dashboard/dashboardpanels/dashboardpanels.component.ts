import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DashboardLayoutComponent,
  PanelModel,
} from '@syncfusion/ej2-angular-layouts';
import { DashboardService } from 'src/app/services/dashboard.service';
import Swal from 'sweetalert2';

interface PanelModel1 extends PanelModel {
  title: string;
  description: string;
  type: string;
}

@Component({
  selector: 'app-dashboardpanels',
  templateUrl: './dashboardpanels.component.html',
  styleUrls: ['./dashboardpanels.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardpanelsComponent {
  @ViewChild('default_dashboard')
  public dashboard: DashboardLayoutComponent;
  constructor(
    private _dashboard: DashboardService,
    private _act: ActivatedRoute
  ) {}
  public count: number = 0;
  public cellSpacing: number[] = [10, 10];

  myDash: any;
  id: any;

  addPanel(): void {
    this.count = this.myDash.panels.length;
    let panel: PanelModel1[] = [
      {
        id: this.count.toString(),
        sizeX: 2,
        sizeY: 1,
        row: 0,
        col: 0,
        title: 'Panel Title',
        description: '',
        type: 'time',
        content: `
          <div class="bg-dark h-100 card" >
            <div class="card-header d-flex justify-content-center " >
              <div class="dropdown">
                <p class="dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Panel title
                </p>
                <ul class="dropdown-menu bg-black text-light">
                  <li>
                    <a class="dropdown-item" href="${'/dashboards/view'}/${
          this.id
        }/${this.count.toString()}">
                      <span class="material-symbols-outlined">
                        visibility
                      </span>
                      View
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="${'/dashboards/edit'}/${
          this.id
        }/${this.count.toString()}">
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
                  <h3 class="text-light" style="color: #a5a5a5" >No Data</h3>
            </div>

          </div>`,
      },
    ];
    this.myDash.panels.push(panel[0]);
    this.dashboard.addPanel(panel[0]);
    let closeIcon: any = document
      .getElementById(this.count.toString())
      .querySelector('.close');
    closeIcon.addEventListener('click', this.onCloseIconHandler.bind(this));
    this.count = this.count + 1;
  }
  onCloseIconHandler(event: any): void {
    console.log(
      (<HTMLElement>event.target).offsetParent.parentElement.parentElement
        .parentElement.parentElement.id
    );

    if ((<HTMLElement>event.target).offsetParent) {
      let id = (<HTMLElement>(
        event.target
      )).offsetParent.parentElement.parentElement.parentElement.parentElement.id.replace(
        '_body',
        ''
      );

      let indexToDelete = this.myDash.panels.findIndex(
        (obj: any) => obj.id === id
      );

      if (indexToDelete !== -1) {
        this.myDash.panels.splice(indexToDelete, 1); // remove one element at the index of the object to delete
      }

      this.dashboard.removePanel(
        (<HTMLElement>(
          event.target
        )).offsetParent.parentElement.parentElement.parentElement.parentElement.id.replace(
          '_body',
          ''
        )
      );
    }
  }

  onPanelResizeStop(args: any) {
    const panelId = args.element.id;
    const newSizeX = args.element.dataset.sizex;
    const newSizeY = args.element.dataset.sizey;
    console.log(args);

    for (let item of this.myDash.panels) {
      if (item.id == panelId) {
        item.sizeX = parseInt(newSizeX);
        item.sizeY = parseInt(newSizeY);
      }
    }
    console.log(this.myDash);

    // Code to update the panel size in your application or save it to the database
  }

  public draganddrop(args: any): void {
    const panel: PanelModel = this.dashboard.getCellInstance(args.element.id);
    const movedPanelIndex: number = this.myDash.panels.findIndex(
      (p: any) => p.id === panel.id
    );
    const { row, col } = panel;

    // Update the row and col of the moved panel in the panels array
    this.myDash.panels[movedPanelIndex] = {
      ...this.myDash.panels[movedPanelIndex],
      row,
      col,
    };

    // Update the row and col of the other panels
    this.myDash.panels.forEach((p: any) => {
      if (p.id !== panel.id) {
        if (p.row === panel.row && p.col >= panel.col) {
          p.col++;
        }
        if (p.col === panel.col && p.row >= panel.row) {
          p.row++;
        }
      }
    });
  }

  ngOnInit(): void {
    this.id = this._act.snapshot.paramMap.get('id');
    this._dashboard.getbyid(this.id).subscribe({
      next: (res) => {
        this.myDash = res;
        if (this.myDash.panels.length > 0) {
          for (let p of this.myDash.panels) {
            this.dashboard.addPanel(p);
            let closeIcon: any = document
              .getElementById(p.id)
              .querySelector('.close');
            closeIcon.addEventListener(
              'click',
              this.onCloseIconHandler.bind(this)
            );
          }
        }
      },
    });
  }

  save() {
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

        this._dashboard.update(this.id, this.myDash).subscribe({
          next: (res) => {
            Swal.fire('Saved!', '', 'success');
          },
        });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
