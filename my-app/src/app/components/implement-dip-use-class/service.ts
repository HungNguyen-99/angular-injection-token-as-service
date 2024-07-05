import { ClassProvider, InjectionToken } from '@angular/core';

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
