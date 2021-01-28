import { range, Observer, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next :', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
}

range(1, 5)
.pipe(
    map<number, number>(value => value * 10)
)
.subscribe(observer);

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupCode$ = keyup$.pipe(
    map(event => event.code)   
);

keyupCode$.subscribe ( code => console.log('map - ', code) );


/**
 * pluck extraer un valor del objeto recibido (devuelve el valor de una propiedad del objeto)
 */

 //es similar a targe.baseURI
 const keyupPluck$ = keyup$.pipe(
     pluck('target', 'baseURI')
 );

 keyupPluck$.subscribe ( code => console.log('pluck - ', code) );

 /**
  * mapTo() transforma la entrada en una salida especifica
  */

 const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);

keyupMapTo$.subscribe ( code => console.log('mapTo - ', code) );