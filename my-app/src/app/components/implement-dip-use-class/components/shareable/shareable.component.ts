import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SEARCH } from '../../service';

@Component({
  selector: 'app-shareable',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, AsyncPipe, JsonPipe],
  templateUrl: './shareable.component.html',
  styleUrl: './shareable.component.css',
})
export class ShareableComponent {
  searchService = inject(SEARCH, { optional: true });
  data = new BehaviorSubject<object[]>([]);
  searchInput = new FormControl('', { nonNullable: true });

  constructor() {
    if (!this.searchService) throw new Error(`SEARCH TOKEN must be PROVIDED`);
  }

  search() {
    if (this.searchService)
      this.data.next(this.searchService.search(this.searchInput.value));
  }
}
