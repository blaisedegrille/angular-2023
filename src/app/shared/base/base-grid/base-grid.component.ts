import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BaseEditFormComponent } from '../base-edit-form/base-edit-form.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { QuestionBase } from '../dynamic-form/question/question-base';
import { QuestionService } from '../dynamic-form/question/question.service';

@Component({
  selector: 'ang23-base-grid',
  templateUrl: './base-grid.component.html',
  styleUrls: ['./base-grid.component.scss'],
})
export class BaseGridComponent<T> {
  protected displayedColumns: DisplayedColumns | undefined;
  protected dataSource = new MatTableDataSource<T>();
  protected service: any;

  public clickedRows = new Set<T>();
  public selection: SelectionModel<T> = new SelectionModel<T>();
  public initialSelection = [];
  public allowMultiSelect = false;

  // paginator
  public length!: number;
  public pageSize = 10;
  public pageIndex = 0;
  public pageEvent!: PageEvent;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public collection: T[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('szülő');
    this.reloadFromService();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.selection = new SelectionModel<T>(
      this.allowMultiSelect,
      this.initialSelection
    );
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

  openDialog(element: any): void {
    const dialogRef = this.dialog.open(BaseEditFormComponent, {
      data: element[0],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.selection.clear();
    });
  }

  onSelectionChange(element: T) {
    console.log('onSelectionChange() ', element);
    console.log('selected? ', this.selection.isSelected(element));
    if (this.selection.isSelected(element)) {
      this.selection.deselect(element);
    } else {
      this.selection.select(element);
    }

    console.log('', this.selection.selected);
  }

  onRowChange(element: T) {
    console.log('onRowChange');
    this.onSelectionChange(element);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
    console.log('toggleAllRows() ', this.selection);
  }
}

export interface DisplayedColumns {
  display: any[];
  columns: string[];
  // headers: string[];
}
