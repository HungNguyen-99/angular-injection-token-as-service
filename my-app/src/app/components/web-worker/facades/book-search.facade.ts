import { inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { map, Observable, switchMap, tap } from "rxjs";
import { BookApi } from "../data-access";
import { BookChoice, BookInfo, books } from "../models";
import { SearchResult } from "../utils";

type BookSearchState = {
    books: Record<BookChoice, BookInfo>;
    paragraphs: string[];
    result: SearchResult;
}

const initialState: BookSearchState = {
    books: books,
    paragraphs: [],
    result: {
        paragraphs: [],
        searchedParagraphCount: 0,
        paragraphCount: 0
    }
}

@Injectable()
export class BookSearchFacade extends ComponentStore<BookSearchState> {

    private readonly bookApi = inject(BookApi);

    constructor() {
        super(initialState);
    }

    readonly books$ = this.select(state => state.books).pipe(
        map(books => Object.values(books))
    )

    vm$ = this.select(
        {
            books: this.books$
        },
        { debounce: true }
    )

    getBook2 = this.effect<string>(url$ => {
        return url$.pipe(
            switchMap((url: string) => this.bookApi.getBooks(url)),
            map((text) => this.splitTextIntoParagraphs(text)),
            tap((paragraphs) => this.patchState({ paragraphs })),
            tap((paragraphs: any) => {
                console.log(paragraphs);
            })
        )
    })

    getBook(url$: Observable<string>) {
        url$.pipe(
            switchMap((url: string) => this.bookApi.getBooks(url)),
            map((text) => this.splitTextIntoParagraphs(text)),
            tap((paragraphs) => this.patchState({ paragraphs })),
            tap((paragraphs: any) => {
                console.log(paragraphs);
            })
        ).subscribe()
    }

    private splitTextIntoParagraphs(text: string): string[] {
        return text.split(/\n\s*\n/);
    }
}