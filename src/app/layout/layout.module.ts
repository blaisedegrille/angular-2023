import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { UserComponent } from './components/user/user.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RoleComponent } from './components/role/role.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MaintenanceComponent,
    UserComponent,
    SettingsComponent,
    RoleComponent,
    HomeComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class LayoutModule {}
