import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import {
  BaseGridComponent,
  DisplayedColumns,
} from 'src/app/shared/base/base-grid/base-grid.component';

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
    ],
    columns: ['id', 'title', 'body', 'userId'],
    // headers: ['No.', 'Title', 'Body', 'UserId'],
  };

  constructor(private readonly userService: UserService) {
    super();
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
