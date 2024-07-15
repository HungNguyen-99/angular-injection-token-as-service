import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { ModelParent, TemplateFromParent } from '../../../models/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() templateFromParent!: TemplateRef<TemplateFromParent>;
  @Input() dataFromParent!: ModelParent;
}
