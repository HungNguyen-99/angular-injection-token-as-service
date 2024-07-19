import { inject, Injectable, InjectionToken } from '@angular/core';
import { TestUseClassAbstract } from '../abstract-classes/common-abstract';

@Injectable()
export class TestUseClassService extends TestUseClassAbstract {
  protected diOfTestUseClassService = inject(DiOfTestUseClassService);
  logMessage() {
    console.log(
      'Test Use Class Service:: ',
      this.diOfTestUseClassService.getData()
    );
  }
}

@Injectable()
export class TestUseClassAlternativeService extends TestUseClassService {
  override logMessage(): void {
    console.log(
      'Test Use Class Alternative Service',
      this.diOfTestUseClassService.getData()
    );
  }
}

@Injectable()
export class DiOfTestUseClassService {
  getData() {
    return '[diOfTestUseClassService]';
  }
}

////////////////////////////////

export interface TokenTestUseClass {
  logMessage(value: string): void;
  calSum(a: number, b: number): number;
}

export class TestUseClass implements TokenTestUseClass {
  logMessage(value: string): void {
    console.log(value);
  }
  calSum(a: number, b: number): number {
    return a + b;
  }
}

export const TOKEN_TEST_USE_CLASS = new InjectionToken<TokenTestUseClass>(
  'testUseClassService'
);
