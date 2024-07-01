import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ModelI } from '../models/common';

export class GithubUserService {
  private readonly http = inject(HttpClient);

  searchUser(index = 1) {
    return this.http.get<ModelI>(
      `https://jsonplaceholder.typicode.com/todos/${index}`
    );
  }
}
