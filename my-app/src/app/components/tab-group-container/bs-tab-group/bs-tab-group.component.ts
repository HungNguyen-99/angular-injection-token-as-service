import { Component } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-bs-tab-group',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet],
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: BsTabGroupComponent,
    },
  ],
  templateUrl: './bs-tab-group.component.html',
  styleUrl: './bs-tab-group.component.css',
})
export class BsTabGroupComponent extends TabGroupComponent {}
