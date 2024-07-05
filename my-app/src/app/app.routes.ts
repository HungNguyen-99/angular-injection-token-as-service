import { Routes } from '@angular/router';
import { InjectionTokenComponent } from './components/injection-token/injection-token.component';
import { NgComponentOutletComponent } from './components/ng-component-outlet/ng-component-outlet.component';
import { NgTemplateOutletExComponent } from './components/ng-template-outlet-ex/ng-template-outlet-ex.component';
import { ParentComponent } from './components/parent/parent.component';
import { ImplementDIPUseClassComponent } from './components/implement-dip-use-class/implement-dip-use-class.component';

export const routes: Routes = [
  {
    path: '',
    component: NgTemplateOutletExComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'ng-component-outlet',
    component: NgComponentOutletComponent,
  },
  {
    path: 'injection-token',
    component: InjectionTokenComponent,
  },
  {
    path: 'dip-use-class',
    component: ImplementDIPUseClassComponent,
  },
];
