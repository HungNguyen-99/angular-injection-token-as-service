import { Injectable } from '@angular/core';

@Injectable()
export class TestResolutionModifierService {
  private count = 0;
  log(type: string) {
    console.log(`[${type}]:: ${this.count}`);
  }
  setCount(value: number) {
    this.count = value;
  }
}

@Injectable()
export class TestResolutionModifier2Service {
  log(type: string) {
    console.log('test 222222222222222');
  }
}
