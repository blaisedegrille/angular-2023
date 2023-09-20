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
    { name: 'Maintenance', route: 'maintenance' },
    { name: 'Role', route: 'role' },
    { name: 'User', route: 'user' },
    { name: 'Settings', route: 'settings' },
  ];
}
