import { Component } from '@angular/core';
import { ComponentOne, Injector, UserService } from '../services/simply-di';

@Component({
  selector: 'ex-di-manual',
  template: ` <h1>Example DI Manual</h1> `,
})
export class ExampleDiManualComponent {
  injector: any;
  constructor() {
    this.injector = new Injector([UserService]);
    const component = new ComponentOne(this.injector.get(UserService));
    component.user.sayHi();
  }
}
