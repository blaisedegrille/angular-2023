import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/components/home/home.component';
import { SettingsComponent } from './layout/components/settings/settings.component';
import { UserComponent } from './layout/components/user/user.component';
import { RoleComponent } from './layout/components/role/role.component';
import { MaintenanceComponent } from './layout/components/maintenance/maintenance.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'role', component: RoleComponent },
  { path: 'user', component: UserComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
