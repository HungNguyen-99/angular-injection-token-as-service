import { ClassProvider, InjectionToken, ValueProvider } from '@angular/core';
export const DATA = new InjectionToken<string>('data123', {
  factory: () => 'hello',
});

//USE VALUE
export type Environment = 'local' | 'dev' | 'int' | 'prod';

export interface AppConfig {
  version: string;
  apiUrl: string;
  environment: Environment;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const getAppConfigProvider = (value: AppConfig): ValueProvider => ({
  provide: APP_CONFIG,
  useValue: value,
});

//USE CLASS
export interface Search<T> {
  search: (search: string) => T[];
}

export const SEARCH = new InjectionToken<Search<object>>('search');

export const getSearchServiceProvider = <T, C extends Search<T>>(
  clazz: new () => C
): ClassProvider => ({
  provide: SEARCH,
  useClass: clazz,
});

export class DetailSearchService implements Search<Detail> {
  search = (search: string): Detail[] => {
    let obj: Detail[] = [];
    if (search) {
      obj = [
        {
          id: 1,
          name: 'Hung',
        },
        {
          id: 2,
          name: 'Hoa',
        },
      ];
    }
    return obj;
  };
}

export interface Detail {
  id: number;
  name: string;
}
