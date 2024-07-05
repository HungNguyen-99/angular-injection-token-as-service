import { Component, inject } from '@angular/core';
import {
  APP_CONFIG,
  DATA,
  SEARCH,
} from '../../services/injection-token.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-injection-token',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, AsyncPipe, JsonPipe],
  templateUrl: './injection-token.component.html',
  styleUrl: './injection-token.component.css',
})
export class InjectionTokenComponent {
  dataTest = inject(DATA);

  //USE VALUE
  token = inject(APP_CONFIG);

  //USE VALUE
  searchService = inject(SEARCH, { optional: true });
  data = new BehaviorSubject<object[]>([]);
  searchInput = new FormControl('', { nonNullable: true });

  constructor() {
    if (!this.searchService) {
      throw new Error('SEARCH INPUT NOT FOUND');
    }
  }

  search() {
    if (this.searchService) {
      this.data.next(this.searchService?.search(this.searchInput.value));
    }
  }
}
