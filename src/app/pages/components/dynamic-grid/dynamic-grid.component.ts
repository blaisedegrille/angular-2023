import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { DisplayedColumns } from 'src/app/models/displayed-columns';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'ang23-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.scss'],
})
export class DynamicGridComponent implements OnInit {
  public displayedColumns: DisplayedColumns = {
    display: [
      {
        name: 'id',
        header: 'Id',
        type: 'number',
      },
      {
        name: 'name',
        header: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        header: 'Email',
        type: 'string',
      },
    ],
    columns: ['select', 'id', 'name', 'email', 'action'],
  };
  public paginationSizes: number[] = [5, 10, 15];
  public defaultPageSize = this.paginationSizes[0];
  public paginationLength: number = 0;
  public pageIndex: number = 0;
  public loading = false;
  public tableData!: User[];
  public collection!: User[];
  public pageEvent!: PageEvent;
  public sortState: Sort = {
    direction: '',
    active: '',
  };
  public searchValue = '';

  constructor(
    private readonly userService: UserService,
    public dialog: MatDialog
  ) {
    this.userService.getDefaultData().subscribe({
      next: (res: User[]) => {
        this.collection = res;
        this.tableData = res;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
      complete: () => {},
    });
  }

  public ngOnInit() {
    console.log('DynamicGridComponent');
    this.getTableData();
    //this.initFilters();
    //this.handleFilterEvent();
  }
  /*   initFilters() {
    this.initFilterDropDowns();
    this.initFilterForm();
  } */

  getTableData() {}

  handlePageEvent(event: PageEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1500);
    console.log('EVAT LIST COMP: ', event);
    this.pageEvent = event;
    this.pageIndex = event.pageIndex;
    this.defaultPageSize = event.pageSize;
    //this.getTableData(this.castFilters(this.filters));
  }

  handleSortEvent(event: Sort) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
    this.sortState = event;
    console.log('EvatListComponent sortEvent: ', event);
    //this.getTableData(this.castFilters(this.filters));
  }

  searchInputChange(event: any) {
    if (this.searchValue.length > 1) {
      let searchResult: User[] = [];
      this.tableData.forEach((e: any) => {
        for (let key in e) {
          if (typeof e[key] === 'string') {
            if (e[key].toLowerCase().includes(this.searchValue.toLowerCase())) {
              searchResult.push(e);
            }
          }
        }
      });
      this.tableData = searchResult;
    } else {
      this.tableData = this.collection;
    }
  }

  /*   openDialog(element: any): void {
    const dialogRef = this.dialog.open(BaseEditFormComponent, {
      data: element[0],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.selection.clear();
    });
  } */

  /*   removeHandler(element: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: element[0],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.selection.clear();
    });
  } */

  /*   onSelectionChange(element: T) {
    console.log('onSelectionChange() ', element);
    console.log('selected? ', this.selection.isSelected(element));
    if (this.selection.isSelected(element)) {
      this.selection.deselect(element);
    } else {
      this.selection.select(element);
    }

    console.log('', this.selection.selected);
  } */

  /*   onRowChange(element: T) {
    console.log('onRowChange');
    this.onSelectionChange(element);
  } */

  /*   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  } */

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  /*   toggleAllRows() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
    console.log('toggleAllRows() ', this.selection);
  } */
}
