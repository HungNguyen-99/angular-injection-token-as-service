import { Component } from "@angular/core";
import { BookSearchWorkerComponent } from "./book-search-worker.component";
import { BookSearchComponent } from "./book-search.component";

@Component({
    selector: 'app-book-container',
    template: `
        <div [style.display]="FLEX">
            <app-book-search [style.width.%]="WIDTH"></app-book-search>
            <app-book-search-worker></app-book-search-worker>
        </div>
    `,
    standalone: true,
    imports: [BookSearchComponent, BookSearchWorkerComponent]
})
export class BookContainerComponent {
    FLEX = 'flex';
    WIDTH = '50';
}