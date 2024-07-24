import { Component, Directive, Host, inject } from '@angular/core';
import { TestResolutionModifierService } from '../services/test-resolution-modifier.service';

@Component({
    selector: 'app-child',
    template: ` <h2>child</h2> `,
    standalone: true,
    imports: [],
    providers: [],
})
export class Child {
    private testResolutionModifierService = inject(
        TestResolutionModifierService,
        { optional: true, skipSelf: true }
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

// ========================Host=====================
class LoggerService {
    log(message: string) {
        console.log(message);
    }
}
@Directive({
    selector: '[appChild]',
    standalone: true,
})
export class ChildDirective {
    constructor(@Host() private logger: LoggerService) {
        this.logger.log('child directive');
    }
}
@Directive({
    selector: '[appParent]',
    standalone: true,
    providers: [LoggerService],
})
export class ParentDirective {
    constructor(private logger: LoggerService) {
        this.logger.log('parent directive');
    }
}

@Component({
    selector: 'app-test-resolution-modifier-host',
    template: `
    <div appParent>
        <div>
            <div appChild>123</div>
        </div>
    </div>
  `,
    standalone: true,
    imports: [ParentDirective, ChildDirective],
    providers: [LoggerService],
})
export class TestResolutionModifierHostComponent {
    ngOnInit(): void { }
}
