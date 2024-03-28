import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataTableComponent } from './components/datatable/datatable.component';
import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserComponent } from './components/user/user.component';
import { EditorComponent } from './editor/editor.component';
import { LayoutComponent } from './layout.component';

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
    EditorComponent,
  ],
  imports: [CommonModule, SharedModule, NgChartsModule],
  exports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {}
