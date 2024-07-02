import { Component, inject } from '@angular/core';
import { APP_CONFIG, DATA } from '../../services/injection-token.service';

@Component({
  selector: 'app-injection-token',
  standalone: true,
  imports: [],
  templateUrl: './injection-token.component.html',
  styleUrl: './injection-token.component.css',
})
export class InjectionTokenComponent {
  data = inject(DATA);

  title = inject(APP_CONFIG);
}
