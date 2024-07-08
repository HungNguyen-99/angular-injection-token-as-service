import { Component } from '@angular/core';
import { ShareableComponent } from '../shareable/shareable.component';
import { getServiceProvideOther, serviceProvideOther } from './service';

@Component({
  selector: 'app-implement-shareable',
  standalone: true,
  imports: [ShareableComponent],
  providers: [getServiceProvideOther(serviceProvideOther)],
  templateUrl: './implement-shareable.component.html',
  styleUrl: './implement-shareable.component.css',
})
export class ImplementShareableComponent {}
