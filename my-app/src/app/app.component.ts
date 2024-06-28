import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubUserService } from './services/github-user-service.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { ModelI } from './models/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [GithubUserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  private readonly githubUserService = inject(GithubUserService);
  private readonly destroyRef = inject(DestroyRef);

  public objExample!: ModelI;
  public check: number = 1000;

  ngOnInit(): void {
    this.githubUserService.searchUser(2).pipe(
      takeUntilDestroyed(this.destroyRef),
      tap(value => {
        if(value){
          this.objExample = value;
        }
      })
    ).subscribe();
  }


  changeCheck(){
    this.check = 2000;
  }
}
