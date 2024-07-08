import { ClassProvider } from '@angular/core';
import { Search, SEARCH } from '../../service';

export interface Book {
  id: number;
  name: string;
  author: string;
}

export const getServiceProvideOther = <T, C extends Search<T>>(
  clazz: new () => C
): ClassProvider => ({
  provide: SEARCH,
  useClass: clazz,
});

export class serviceProvideOther implements Search<Book> {
  data: Book[] = [
    {
      id: 1,
      author: 'Hung',
      name: 'Book1',
    },
    {
      id: 2,
      author: 'Han',
      name: 'Book2',
    },
    {
      id: 3,
      author: 'Nam',
      name: 'Book3',
    },
  ];
  search(value: string) {
    return this.data.filter(d =>
      d.author.toLowerCase().includes(value.toLowerCase())
    );
  }
}
