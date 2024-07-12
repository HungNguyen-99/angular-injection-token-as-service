import { Component, inject } from '@angular/core';
import { CartService } from './services/app-di-use-class.service';
import { CartOtherService } from './services/other-service.service';

@Component({
  selector: 'app-di-use-class',
  standalone: true,
  imports: [],
  providers: [{ provide: CartService, useClass: CartOtherService }],
  templateUrl: './di-use-class.component.html',
  styleUrl: './di-use-class.component.css',
})
export class DiUseClassComponent {
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.cartService.addToCart();
  }
}
