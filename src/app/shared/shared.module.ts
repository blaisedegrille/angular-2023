import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BaseMaintenanceComponent } from './base/base-maintenance/base-maintenance.component';
import { BaseGridComponent } from './base/base-grid/base-grid.component';
import { BaseEditFormComponent } from './base/base-edit-form/base-edit-form.component';

@NgModule({
  declarations: [
    BaseMaintenanceComponent,
    BaseGridComponent,
    BaseEditFormComponent,
  ],
  imports: [CommonModule, MaterialModule, NgxDatatableModule],
  exports: [
    MaterialModule,
    NgxDatatableModule,
    BaseMaintenanceComponent,
    BaseEditFormComponent,
  ],
})
export class SharedModule {}
