import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css',
})
export class ComponentTwoComponent {
  @Input() name!: string;
  @Input() age!: number;
  @Input() sex!: boolean;
}
