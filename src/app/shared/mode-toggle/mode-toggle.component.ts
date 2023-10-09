import { Component } from '@angular/core';
import { ModeToggleService } from './mode-toggle.service';
import { ModeLocalStorageService } from './mode-storage.service';
import { Mode } from './mode-toggle.model';

@Component({
  selector: 'ang23-mode-toggle',
  templateUrl: './mode-toggle.component.html',
  styleUrls: ['./mode-toggle.component.scss'],
})
export class ModeToggleComponent {
  icon_name = 'dark_mode';

  constructor(private modeToggleService: ModeToggleService) {}

  toggle() {
    this.icon_name =
      this.icon_name === 'dark_mode' ? 'light_mode' : 'dark_mode';
    this.modeToggleService.toggleMode();
  }
}
