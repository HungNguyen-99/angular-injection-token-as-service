import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { tap } from 'rxjs';
import { ModelI } from './models/common';
import { GithubUserService } from './services/github-user-service.service';
import { DATA } from './services/injection-token.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgTemplateOutlet],
  providers: [GithubUserService, {provide: DATA, useValue: 'HIHI'}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  @Input() count = 0;

  private readonly githubUserService = inject(GithubUserService);
  private readonly destroyRef = inject(DestroyRef);

  public objExample!: ModelI;
  public check = 0;

  public valueImplicit = '123';

  ngOnInit(): void {
    this.githubUserService
      .searchUser(2)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(value => {
          if (value) {
            this.objExample = value;
          }
        })
      )
      .subscribe();
  }

  changeCheck() {
    this.check = 2000;
  }
}
