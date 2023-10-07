import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'ang23-base-grid',
  templateUrl: './base-grid.component.html',
  styleUrls: ['./base-grid.component.scss'],
})
export class BaseGridComponent<T> {
  protected displayedColumns: DisplayedColumns | undefined;
  protected dataSource = new MatTableDataSource<T>();
  protected service: any;

  public length!: number;
  public pageSize = 10;
  public pageIndex = 0;
  public pageEvent!: PageEvent;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public collection: T[] = [];

  ngOnInit(): void {
    console.log('szülő');
    this.reloadFromService();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  reloadFromService() {
    this.service.get().subscribe((res: any) => {
      this.collection = res;
      this.length = this.collection.length;
      this.dataSource.paginator = this.paginator;
      //this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.data = this.collection;
    });
  }

  loadDefaults() {
    this.service.getDefaultData().subscribe((res: any) => {
      this.collection = res;
      this.length = this.collection.length;
      this.dataSource.paginator = this.paginator;
      //this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.data = this.collection;
    });
  }
}

export interface DisplayedColumns {
  display: any[];
  columns: string[];
  // headers: string[];
}
