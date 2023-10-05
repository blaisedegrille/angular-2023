import { Injectable } from '@angular/core';
import { PeriodicElement } from '../shared/base/base-maintenance/base-maintenance.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getTableData(): PeriodicElement[] {
    const data: PeriodicElement[] = [
      { position: 1, name: 'Saját 1', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Saját 2', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Saját 3', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Saját 4', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Saját 5', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Saját 6', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Saját 7', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Saját 8', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Saját 9', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Saját 10', weight: 20.1797, symbol: 'Ne' },
    ];
    return data;
  }
}
