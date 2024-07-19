import { Component, inject, OnInit } from '@angular/core';
import {
  DiOfTestUseClassService,
  TestUseClass,
  TestUseClassAlternativeService,
  TestUseClassService,
  TOKEN_TEST_USE_CLASS,
} from '../services/test-use-class.service';

@Component({
  selector: 'test-use-class',
  template: ` <p>Test Use Class</p> `,
  standalone: true,
  providers: [
    DiOfTestUseClassService,
    { provide: TestUseClassService, useClass: TestUseClassAlternativeService },
    { provide: TOKEN_TEST_USE_CLASS, useClass: TestUseClass },
  ],
})
export class TestUseClassComponent implements OnInit {
  private testUserService = inject(TestUseClassService);
  private testUseClassToken = inject(TOKEN_TEST_USE_CLASS);
  ngOnInit(): void {
    this.testUserService.logMessage();
    this.testUseClassToken.logMessage('test token use class');
    console.log(this.testUseClassToken.calSum(1, 2));
  }
}
