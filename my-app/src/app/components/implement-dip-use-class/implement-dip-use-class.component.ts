import { Component } from '@angular/core';
import { ShareableComponent } from './components/shareable/shareable.component';
import { DetailSearchService, getSearchServiceProvider } from './service';

@Component({
  selector: 'app-implement-dip-use-class',
  standalone: true,
  imports: [ShareableComponent],
  providers: [getSearchServiceProvider(DetailSearchService)],
  templateUrl: './implement-dip-use-class.component.html',
  styleUrl: './implement-dip-use-class.component.css',
})
export class ImplementDIPUseClassComponent {}
