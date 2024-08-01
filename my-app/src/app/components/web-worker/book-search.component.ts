import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, filter } from 'rxjs';
import { BookSearchFacade } from './facades/book-search.facade';
import { BookSearchForm } from './models';
import { isNotNil } from './shared/utils';

@Component({
  selector: 'app-book-search',
  template: `
    <p>book search</p>
    @if (vm$ | async; as vm) {
      <ng-container [formGroup]="form">
        <select formControlName="book">
          @for (item of vm.books; track $index) {
            <option [value]="item.url">{{ item.name }}</option>
          }
        </select>

        <input type="text" formControlName="searchTerm" />
      </ng-container>
      <span>
        <span>{{ vm.searchedParagraphCount }} / {{ vm.paragraphCount }}</span>
        <span>({{ vm.progress }})</span>
      </span>
      @for (item of vm.paragraphMatches; track $index) {
        <hr />
        <blockquote>
          <span>{{ item.before }}</span>
          <strong>{{ item.match }}</strong>
          <span>{{ item.after }}</span>
          <footer>Score: {{ item.score }}</footer>
        </blockquote>
      }
    }
  `,
  standalone: true,
  providers: [(BookSearchFacade)],
  imports: [AsyncPipe, ReactiveFormsModule],
})
export class BookSearchComponent implements OnInit {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly facade = inject(BookSearchFacade);

  vm$ = this.facade.vm$;

  form!: BookSearchForm;

  ngOnInit(): void {
    this.initialForm();
    this.listenFormValueChange();
  }

  private initialForm() {
    this.form = this.fb.group<BookSearchForm['controls']>({
      book: this.fb.control(null),
      searchTerm: this.fb.control(''),
    });
  }

  private listenFormValueChange() {
    const { book, searchTerm } = this.form.controls;

    const book$ = book.valueChanges.pipe(
      distinctUntilChanged(),
      filter(isNotNil)
    );
    const searchTerm$ = searchTerm.valueChanges.pipe(distinctUntilChanged());

    this.facade.getBook(book$);
    this.facade.search(searchTerm$);
  }
}
