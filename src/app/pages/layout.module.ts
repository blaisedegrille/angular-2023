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
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    LayoutComponent,
    MaintenanceComponent,
    UserComponent,
    SettingsComponent,
    DataTableComponent,
    HomeComponent,
    DynamicGridComponent,
    HeaderComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, SharedModule, NgChartsModule],
  exports: [HeaderComponent],
})
export class LayoutModule {}
