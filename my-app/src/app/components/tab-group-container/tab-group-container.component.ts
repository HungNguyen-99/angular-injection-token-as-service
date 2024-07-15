import { Component } from '@angular/core';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-group/tab-panel.component';
import { BsTabGroupComponent } from './bs-tab-group/bs-tab-group.component';

@Component({
  selector: 'app-tab-group-container',
  standalone: true,
  imports: [TabGroupComponent, TabPanelComponent, BsTabGroupComponent],
  templateUrl: './tab-group-container.component.html',
  styles: [''],
})
export class TabGroupContainerComponent {}
