import { Routes } from '@angular/router';
import { DiUseClassComponent } from './components/di-use-class/di-use-class.component';
import { TestUseClassComponent } from './components/doc-angular-dev/components/test-use-class.component';
import { TestUseExistingComponent } from './components/doc-angular-dev/components/test-use-existing.component';
import { TestUseFactoryComponent } from './components/doc-angular-dev/components/test-use-factory.component';
import { ExampleDiManualComponent } from './components/example-DI-manual.component';
import { ImplementShareableComponent } from './components/implement-dip-use-class/components/implement-shareable/implement-shareable.component';
import { ImplementDIPUseClassComponent } from './components/implement-dip-use-class/implement-dip-use-class.component';
import { InjectionTokenComponent } from './components/injection-token/injection-token.component';
import { NgComponentOutletComponent } from './components/ng-component-outlet/ng-component-outlet.component';
import { NgTemplateOutletExComponent } from './components/ng-template-outlet-ex/ng-template-outlet-ex.component';
import { ParentComponent } from './components/parent/parent.component';
import { TabGroupContainerComponent } from './components/tab-group-container/tab-group-container.component';

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
  {
    path: 'implement-shareable',
    component: ImplementShareableComponent,
  },
  {
    // this is for test use class injection for 2 service in 1 component
    path: 'app-di-use-class',
    component: DiUseClassComponent,
  },
  {
    path: 'app-tab-group-container',
    component: TabGroupContainerComponent,
  },
  {
    path: 'ex-di-manual',
    component: ExampleDiManualComponent,
  },
  {
    path: 'doc-angular-dev/test-use-class',
    component: TestUseClassComponent,
  },
  {
    path: 'doc-angular-dev/test-use-existing',
    component: TestUseExistingComponent,
  },
  {
    path: 'doc-angular-dev/test-use-factory',
    component: TestUseFactoryComponent,
  },
  {
    path: 'test-static-class',
    loadComponent: () =>
      import('./components/test-static-class.component').then(
        m => m.TestStaticClassComponent
      ),
  },
  {
    path: 'app-test-provideIn-platform',
    loadComponent: () =>
      import(
        './components/doc-angular-dev/components/test-provideIn-platform.component'
      ).then(m => m.TestProvideInPlatformComponent),
  },
  {
    path: 'app-test-resolution-modifier',
    loadComponent: () =>
      import(
        './components/doc-angular-dev/components/test-resolution-modifier.component'
      ).then(m => m.TestResolutionModifierComponent),
  },
  {
    path: 'app-test-resolution-modifier-host',
    loadComponent: () =>
      import(
        './components/doc-angular-dev/components/test-resolution-modifier.component'
      ).then(m => m.TestResolutionModifierHostComponent),
  },
];
