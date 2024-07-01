import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentTwoComponent } from './components/component-two/component-two.component';

@Component({
  selector: 'app-ng-component-outlet',
  standalone: true,
  imports: [NgComponentOutlet, ComponentTwoComponent],
  templateUrl: './ng-component-outlet.component.html',
  styleUrl: './ng-component-outlet.component.css',
})
export class NgComponentOutletComponent {
  comOne = {
    component: ComponentTwoComponent,
    inputs: { name: 'Hung', age: 25, sex: true },
  };
}
