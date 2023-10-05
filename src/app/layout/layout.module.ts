import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { UserComponent } from './components/user/user.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DataTableComponent } from './components/datatable/datatable.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MaintenanceComponent,
    UserComponent,
    SettingsComponent,
    DataTableComponent,
    HomeComponent,
    DynamicGridComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class LayoutModule {}
