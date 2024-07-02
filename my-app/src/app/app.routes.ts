import { Routes } from '@angular/router';
import { NgTemplateOutletExComponent } from './components/ng-template-outlet-ex/ng-template-outlet-ex.component';
import { ParentComponent } from './components/parent/parent.component';
import { NgComponentOutletComponent } from './components/ng-component-outlet/ng-component-outlet.component';

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
];
