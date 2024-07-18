import { Component, inject, OnInit } from "@angular/core";
import { DiOfTestUseClassService, TestUseClassAlternativeService, TestUseClassService } from "../services/test-use-class.service";

@Component({
    selector: 'test-use-class',
    template: ` <p>Test Use Class</p> `,
    standalone: true,
    providers: [
        DiOfTestUseClassService,
        {provide: TestUseClassService, useClass: TestUseClassAlternativeService}
    ]
})
export class TestUseClassComponent implements OnInit { 
    private testUserService = inject(TestUseClassService);
    ngOnInit(): void {
        this.testUserService.logMessage();
    }
}
