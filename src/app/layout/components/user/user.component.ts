import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {
  MatTable,
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'ang23-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @ViewChild(MatAccordion, { static: false }) accordion!: MatAccordion;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  public displayedColumns: string[] = ['id', 'title', 'body', 'userId'];
  public length!: number;
  public pageSize = 10;
  public pageIndex = 0;
  pageEvent!: PageEvent;

  public dataSource!: MatTableDataSource<User>;
  public users: User[] = [];

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((res) => {
      this.users = res;
      this.length = this.users.length;
      this.dataSource.paginator = this.paginator;
      //this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.data = this.users;
    });
  }

  ngAfterViewInit() {
    console.log('ok');
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
