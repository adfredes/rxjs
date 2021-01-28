define(["require", "exports", "rxjs", "rxjs/operators"], function (require, exports, rxjs_1, operators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const observer = {
        next: value => console.log('next :', value),
        error: error => console.warn('error: ', error),
        complete: () => console.info('complete')
    };
    rxjs_1.range(1, 5)
        .pipe(operators_1.map(value => value * 10))
        .subscribe(observer);
    const keyup$ = rxjs_1.fromEvent(document, 'keyup');
    const keyupCode$ = keyup$.pipe(operators_1.map(event => event.code));
    keyupCode$.subscribe(code => console.log('map - ', code));
    /**
     * pluck extraer un valor del objeto recibido (devuelve el valor de una propiedad del objeto)
     */
    //es similar a targe.baseURI
    const keyupPluck$ = keyup$.pipe(operators_1.pluck('target', 'baseURI'));
    keyupPluck$.subscribe(code => console.log('pluck - ', code));
    /**
     * mapTo() transforma la entrada en una salida especifica
     */
    const keyupMapTo$ = keyup$.pipe(operators_1.mapTo('tecla presionada'));
    keyupMapTo$.subscribe(code => console.log('mapTo - ', code));
});
