import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { SettingsComponent } from './pages/components/settings/settings.component';
import { UserComponent } from './pages/components/user/user.component';
import { MaintenanceComponent } from './pages/components/maintenance/maintenance.component';
import { DynamicGridComponent } from './pages/components/dynamic-grid/dynamic-grid.component';
import { DataTableComponent } from './pages/components/datatable/datatable.component';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dynamic-grid', component: DynamicGridComponent },
  { path: 'dashboard', component: DashboardComponent },
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
