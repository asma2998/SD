import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';

import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { SidebarModule, MenuAllModule, TreeViewAllModule, ToolbarAllModule} from '@syncfusion/ej2-angular-navigations';

import { RadioButtonModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './dashboard/list/list.component';
import { CreatepanelComponent } from './dashboard/createpanel/createpanel.component';
import { DashboardpanelsComponent } from './dashboard/dashboardpanels/dashboardpanels.component';
import { DetailpanelComponent } from './dashboard/detailpanel/detailpanel.component';


import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

import { MapsAllModule } from '@syncfusion/ej2-angular-maps';

import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';

import { TextBoxModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';


import { CheckBoxModule, ButtonAllModule} from '@syncfusion/ej2-angular-buttons';

import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { EditComponent } from './dashboard/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    CreatepanelComponent,
    DashboardpanelsComponent,
    DetailpanelComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    SidebarModule,
    ToolbarAllModule,
    TextBoxAllModule, 
    RadioButtonModule, 
    MenuAllModule, 
    DropDownListModule, 
    ButtonModule, 
    TreeViewAllModule,
    ListViewAllModule,
    FormsModule,


 
    DashboardLayoutModule,
    NumericTextBoxModule, 
    MapsAllModule,
    AutoCompleteModule, 
    CheckBoxModule,
    ButtonAllModule,
    TextBoxModule, 
    ChartAllModule, 
    AccumulationChartAllModule, 
    RangeNavigatorAllModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
