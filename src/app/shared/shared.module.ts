import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialize } from 'rxjs';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule],
})
export class SharedModule {}
