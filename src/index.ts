import { range, Observer, fromEvent, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next :', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
}

/**
 * tap: 
 */

 const numeros$ = range(1, 5);

 numeros$.pipe(
     tap(x => console.log('antes', x)),
     map( val => val * 10),
     tap(observer),
 )
 .subscribe(val => console.log('subs: ', val));
