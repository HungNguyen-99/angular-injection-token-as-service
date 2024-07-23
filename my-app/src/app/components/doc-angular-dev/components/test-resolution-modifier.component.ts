import { Component, inject } from '@angular/core';
import { TestResolutionModifierService } from '../services/test-resolution-modifier.service';

@Component({
    selector: 'app-test-resolution-modifier1',
    template: `
        <h3>app-test-resolution-modifier3</h3>
    `,
    standalone: true,
})
export class TestResolutionModifier1Component {
    private testResolutionModifierService = inject(TestResolutionModifierService);

    ngOnInit(): void {
        this.testResolutionModifierService.log('child child');
    }
}

@Component({
    selector: 'app-child',
    template: ` 
        <h2>child</h2> 
    `,
    standalone: true,
    imports: [],
    providers: [],
})
export class Child {
    private testResolutionModifierService = inject(
        TestResolutionModifierService,
        { host: true }
    );

    ngOnInit(): void {
        this.testResolutionModifierService?.log('child');
    }
}

@Component({
    selector: 'app-test-resolution-modifier',
    template: `
    <h1>Parent</h1>
    <app-child />
  `,
    standalone: true,
    providers: [TestResolutionModifierService],
    imports: [Child],
})
export class TestResolutionModifierComponent {
    private testResolutionModifierService = inject(TestResolutionModifierService);

    ngOnInit(): void {
        this.testResolutionModifierService.setCount(5);
        this.testResolutionModifierService.log('parent');
    }
}

