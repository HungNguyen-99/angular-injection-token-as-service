import { Component, inject, OnInit } from "@angular/core";
import { TestUseExistingService, TestUseExistingService2 } from "../services/test-use-existing.service";

@Component({
    selector: 'ex-di-use-existing',
    template: ` <p>Example DI Use Existing</p> `,
    standalone: true,
    providers: [
        TestUseExistingService,
        {provide: TestUseExistingService2, useExisting: TestUseExistingService}
    ]
})
export class TestUseExistingComponent implements OnInit {
    private testUseExistingService = inject(TestUseExistingService);
    private testUseExistingService2 = inject(TestUseExistingService2);

    ngOnInit(): void {
        this.testUseExistingService.setCount(9);
        this.testUseExistingService.log();

        this.testUseExistingService2.setCount(22);
        this.testUseExistingService2.log();
        this.testUseExistingService.log();

        
    }
}
