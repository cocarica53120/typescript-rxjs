import { fromEvent, interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// Each time we modify this source in stackblitz or sandbox, always refresh browser to be sure that all observables have been unsuscribed....

const sourceInterval: Observable<number> = interval(1000);

sourceInterval.subscribe((it) => console.log('it', it));

const itDouble = sourceInterval.pipe(
  map((it) => it * it + 10 + Math.pow(it, 2))
);

itDouble.subscribe((i) => console.log('i', i));

//create observable that emits click events
const source = fromEvent(document, 'click');
//map to string with given event timestamp
const example = source.pipe(map((event) => `Event time: ${event.timeStamp}`));
const example1 = source.pipe(map((event) => `Event time1: ${event.timeStamp}`));

const example2 = source.pipe(
  map((event) => {
    console.log(event);
    return 10;
  }),
  map((n) => n * n)
);

//output (example): 'Event time: 7276.390000000001'
const subscribe = example.subscribe((val) => console.log(val));
const subscribe1 = example1.subscribe((val) => console.log(val));
// const subscribe2 = source.subscribe((val) => console.log(val));

const subscribe2 = source.subscribe((val) => console.log(val));

const subscribe3 = example2.subscribe((val) => console.log('val', val));
