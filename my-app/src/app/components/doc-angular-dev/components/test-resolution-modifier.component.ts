import { Component, inject } from '@angular/core';
import { TestResolutionModifierService } from '../services/test-resolution-modifier.service';

@Component({
  selector: 'app-test-resolution-modifier2',
  template: ` <p>test-resolution-modifier2</p> `,
  standalone: true,
  providers: [TestResolutionModifierService],
})
export class TestResolutionModifier2Component {
  private testResolutionModifierService = inject(
    TestResolutionModifierService,
    { optional: true, self: true }
  );

  ngOnInit(): void {
    this.testResolutionModifierService?.setCount(10);
    this.testResolutionModifierService?.log('child');
  }
}

@Component({
  selector: 'app-test-resolution-modifier',
  template: `
    <h1>test-resolution-modifier</h1>
    <app-test-resolution-modifier2 />
  `,
  standalone: true,
  providers: [TestResolutionModifierService],
  imports: [TestResolutionModifier2Component],
})
export class TestResolutionModifierComponent {
  private testResolutionModifierService = inject(TestResolutionModifierService);

  ngOnInit(): void {
    this.testResolutionModifierService.setCount(5);
    this.testResolutionModifierService.log('parent');
  }
}
