import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardpanelsComponent } from './dashboard/dashboardpanels/dashboardpanels.component';
import { DetailpanelComponent } from './dashboard/detailpanel/detailpanel.component';
import { EditComponent } from './dashboard/edit/edit.component';
import { ListComponent } from './dashboard/list/list.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/dashboards',
    pathMatch: 'full'
  },
  {
    path: 'dashboards',
    component: DashboardComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'board/:id', component: DashboardpanelsComponent },
      { path: 'view/:id/:panel', component: DetailpanelComponent },
      { path: 'edit/:id/:panel', component: EditComponent }


    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
