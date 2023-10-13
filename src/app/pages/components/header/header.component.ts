import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang23-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  title: string = '';
}
