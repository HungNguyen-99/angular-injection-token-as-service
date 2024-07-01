import { Type } from '@angular/core';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';

export class NgComService {
  getComponent(): { component: Type<any>; inputs: Record<string, unknown> }[] {
    return [
      {
        component: ComponentOneComponent,
        inputs: {
          description: 'Hello wourd',
        },
      },
      {
        component: ComponentTwoComponent,
        inputs: {
          name: 'Hung',
          age: 25,
          sex: true,
        },
      },
    ] as { component: Type<any>; inputs: Record<string, unknown> }[];
  }
}
