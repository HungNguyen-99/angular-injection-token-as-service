import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export class GithubUserService {
    private readonly http = inject(HttpClient);

    searchUser(index = 1) {
        return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${index}`);
    }
}