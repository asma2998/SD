import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { SidebarComponent, ClickEventArgs, MenuComponent } from '@syncfusion/ej2-angular-navigations';
import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

interface MenuItemModel1 extends MenuItemModel {
    image?: string;
}

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html',
    // template: `<ejs-textbox id="textarea" placeholder="Enter your address" floatLabelType="Auto" ></ejs-textbox>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('sidebarMenuInstance')
    public sidebarMenuInstance: SidebarComponent;

    public menuItems: MenuItemModel1[] = [
      
        {
            
            text: 'Search dashboars',
            iconCss: 'fas fa-search mx-1 text-light',
            
        },
        {
            text: 'Starred',
            iconCss: 'fa-regular fa-star mx-1 text-light',
            items: [
                { text: 'Your starred dashboards will appear here' }
            ]
        },
        {
            text: 'Dashboards',
            iconCss: 'fas fa-th-large mx-1 text-light',
            items: [
                { text: 'Dashboards' , url:'/dashboards' },
                { text: 'Browse', url:'/dashboards' },
                { text: 'Playlists' },
                { text: 'Snapshots' },
                { text: 'New Dashboard', url:'/dashboards' },
                { text: 'New Folder' },
                { text: 'Import' },
            ]
        },
        {
            text: 'Explore',
            iconCss: 'fa-regular fa-compass mx-1 text-light',
          
        },
        {
            text: 'Alerting',
            iconCss: 'fa-sharp fa-regular fa-bell mx-1 text-light',
            items: [
                { text: 'Alert rules' },
                { text: 'Contact points' },
                { text: 'Notification policies' },
                { text: 'Silences' },
                { text: 'Groups' },
                { text: 'Admin' }
            ]
        },
        {
            text: 'Reporting',
            iconCss: 'fa-regular fa-file mx-1 text-light',
        },
        
      
    ];
    public enableDock: boolean = true;
    public dockSize: string = '50px';
    public width: string = '220px';
    public target: string = '.main-menu-content';
    constructor() {
    }

    toolbarCliked(args:ClickEventArgs) {
        if(args.item.tooltipText == "Menu") {
            this.sidebarMenuInstance.toggle();
        }
    }

    ngOnInit(): void {
     
    }
}
// open new tab