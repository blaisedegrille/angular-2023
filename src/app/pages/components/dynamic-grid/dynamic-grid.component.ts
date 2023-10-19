import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DisplayedColumns } from 'src/app/models/displayed-columns';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { BaseGridComponent } from 'src/app/shared/base/base-grid/base-grid.component';

@Component({
  selector: 'ang23-dynamic-grid',
  templateUrl: '../../../shared/base/base-grid/base-grid.component.html',
  styleUrls: ['./dynamic-grid.component.scss'],
})
export class DynamicGridComponent extends BaseGridComponent<User> {
  public cols: DisplayedColumns = {
    display: [
      {
        name: 'id',
        header: 'Id',
      },
      {
        name: 'name',
        header: 'Name',
      },
      {
        name: 'email',
        header: 'Email',
      },
    ],
    columns: ['id', 'name', 'email', 'select'],
    // headers: ['No.', 'Title', 'Body', 'UserId'],
  };

  constructor(
    private readonly userService: UserService,
    public override dialog: MatDialog
  ) {
    super(dialog);
    super.service = userService;
    super.displayedColumns = this.cols;
  }

  public override ngOnInit() {
    console.log('gyerek');
    super.ngOnInit();
  }
}

/*
    {
      name: 'id',
      header: 'No.',
    },
    {
      name: 'title',
      header: 'Title',
    },
    {
      name: 'body',
      header: 'Body',
    },
    {
      name: 'userId',
      header: 'UserId',
    },
*/
