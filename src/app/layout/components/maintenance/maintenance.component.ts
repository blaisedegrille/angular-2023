import { NgFor } from '@angular/common';
import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/service/data.service';
import {
  BaseMaintenanceComponent,
  PeriodicElement,
} from 'src/app/shared/base/base-maintenance/base-maintenance.component';

@Component({
  selector: 'ang23-maintenance',
  templateUrl:
    '../../../shared/base/base-maintenance/base-maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  providers: [DataService],
})
export class MaintenanceComponent
  extends BaseMaintenanceComponent
  implements OnInit
{
  data: PeriodicElement[] = [
    { position: 1, name: 'Saját 1', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Saját 2', weight: 4.0026, symbol: 'He' },
  ];
  // override dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  /*   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } */

  constructor(private readonly dataService: DataService) {
    super();
    super.service = dataService;
    // new MatTableDataSource<PeriodicElement>(this.data);
  }

  public override ngOnInit() {
    console.log('gyerek');
    super.ngOnInit();
    // super.dataSource.data = ELEMENT_DATA;
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Saját 1', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Saját 2', weight: 4.0026, symbol: 'He' },
];
