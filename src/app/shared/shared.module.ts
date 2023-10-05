import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialize } from 'rxjs';
import { MaterialModule } from './material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BaseMaintenanceComponent } from './base/base-maintenance/base-maintenance.component';

@NgModule({
  declarations: [BaseMaintenanceComponent],
  imports: [CommonModule, MaterialModule, NgxDatatableModule],
  exports: [MaterialModule, NgxDatatableModule, BaseMaintenanceComponent],
})
export class SharedModule {}
