import {
  JsonPipe,
  NgClass,
  NgFor,
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, JsonPipe],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.css',
})
export class TabGroupComponent {
  @Input() tabActiveIndex = 0;
  // @Output() tabActiveChange = new EventEmitter<number>();
  tabPanelList: TabPanelComponent[] = [];
  constructor() {}

  selectItem(idx: number) {
    this.tabActiveIndex = idx;
    // this.tabActiveChange.emit(idx);
  }

  addTabPanel(tab: TabPanelComponent) {
    debugger;
    this.tabPanelList.push(tab);
  }

  removeTabPanel(tab: TabPanelComponent) {
    let index = -1;
    const tabPanelList: TabPanelComponent[] = [];
    this.tabPanelList.forEach((item, idx) => {
      if (tab === item) {
        index = idx;
        return;
      }
      tabPanelList.push(item);
    });
    this.tabPanelList = tabPanelList;
    if (index !== -1) {
      this.selectItem(0);
    }
  }

  clickFin() {
    console.log('TabGroupComponent');
  }
}
