import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin/dashboard'] }
                ]
            },
            {
                label: 'Control',
                items: [
                    {
                        label: 'Products', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'List', icon: 'pi pi-fw pi-table', routerLink:['/admin/product']},

                            {label: 'Add new', icon: 'pi pi-fw pi-plus', routerLink:['/admin/product/add']},

                        ]
                    },
                    {
                        label: 'Categories', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'List', icon: 'pi pi-fw pi-table', routerLink:['/admin/category']},
                            {label: 'Add new', icon: 'pi pi-fw pi-plus', routerLink:['/admin/category/add']},
                        ]
                    },
                    {
                        label: 'User', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'List', icon: 'pi pi-fw pi-table', routerLink:['/admin/user']}
                            
                        ]
                    }
                    
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/admin']
                    },
                    {
                        label: 'View Source', icon: 'pi pi-fw pi-search', url: ['/admin'], target: '_blank'
                    }
                ]
            }
        ];
    }
}
