import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/components/home/home.component';
import { SettingsComponent } from './layout/components/settings/settings.component';
import { UserComponent } from './layout/components/user/user.component';
import { MaintenanceComponent } from './layout/components/maintenance/maintenance.component';
import { DynamicGridComponent } from './layout/components/dynamic-grid/dynamic-grid.component';
import { DataTableComponent } from './layout/components/datatable/datatable.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dynamic-grid', component: DynamicGridComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'datatable', component: DataTableComponent },
  { path: 'user', component: UserComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
