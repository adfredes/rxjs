import { asyncScheduler, of, range } from 'rxjs';

/**
 * Range
 * Emite una secuencia de numero en base a un rango
 */

 //const src$ = of(1,2,3,4,5);
 const src2$ = range(1, 5, asyncScheduler);
 /**
  * asyncScheduler convierte en ascincronica
  */

 console.log('inicio');
 src2$.subscribe(console.log)
 console.log('fin');;