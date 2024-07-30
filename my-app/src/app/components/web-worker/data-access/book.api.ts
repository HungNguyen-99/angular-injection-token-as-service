import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BookApi {
    private readonly _http = inject(HttpClient);

    getBooks(url: string): Observable<string> {
        return this._http.get(url, { responseType: 'text' });
    }

}