import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-ex',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './ng-template-outlet-ex.component.html',
  styleUrl: './ng-template-outlet-ex.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgTemplateOutletExComponent {
  data = 'Have a lot of money';
}
