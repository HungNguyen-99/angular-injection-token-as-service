/// <reference lib="webworker" />

import { auditTime, tap } from 'rxjs';
import { getAccumulatedSearchResults } from './utils';

addEventListener('message', ({ data }) => {
  debugger
  const { paragraphs, term } = data;
  const response = getAccumulatedSearchResults(term, paragraphs).pipe(
    auditTime(1000 / 60),
    tap(value => postMessage(value))
  );
  response.subscribe();
});

// fromEvent<MessageEvent>(self, 'message')
//   .pipe(
//     switchMap((event: { data: WorkerInput }) => {
//       debugger
//       const { paragraphs, term } = event.data;
//       return getAccumulatedSearchResults(term, paragraphs);
//     }),
//     auditTime(1000 / 60),
//     tap(value => postMessage(value))
//   )
//   .subscribe();
