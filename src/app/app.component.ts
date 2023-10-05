import { Component } from '@angular/core';
import { Menu } from './models/menu';

@Component({
  selector: 'ang23-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-2023';
  showFiller = false;
  componentList: Menu[] = [
    { name: 'Home', route: 'home' },
    { name: 'Dynamic Grid', route: 'dynamic-grid' },
    { name: 'Maintenance', route: 'maintenance' },
    { name: 'DataTable', route: 'datatable' },
    { name: 'User', route: 'user' },
    { name: 'Settings', route: 'settings' },
  ];
}
