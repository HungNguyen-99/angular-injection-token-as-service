import {
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template>
      <h1>{{ title }}</h1>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [''],
  standalone: true,
})
export class TabPanelComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @ViewChild(TemplateRef, { static: true }) panelBody!: TemplateRef<unknown>;
  private tabGroub = inject(TabGroupComponent);

  ngOnInit(): void {
    this.tabGroub.addTabPanel(this);
  }

  ngOnDestroy(): void {
    this.tabGroub.removeTabPanel(this);
  }

  clickFin() {
    console.log('TabPanelComponent');
  }
}
