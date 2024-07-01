import { NgComponentOutlet } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { NgComService } from './service';

@Component({
  selector: 'app-ng-component-outlet',
  standalone: true,
  imports: [NgComponentOutlet],
  providers: [NgComService],
  templateUrl: './ng-component-outlet.component.html',
  styleUrl: './ng-component-outlet.component.css',
})
export class NgComponentOutletComponent implements OnInit {
  private ngComponentService = inject(NgComService);

  public currentIndex = 0;

  ngOnInit(): void {}

  getCurrentComponent(index: number) {
    return this.ngComponentService.getComponent()[index];
  }

  nextComponent() {
    this.currentIndex++;
    if (this.currentIndex === this.ngComponentService.getComponent().length) {
      this.currentIndex = 0;
    }
  }
}
