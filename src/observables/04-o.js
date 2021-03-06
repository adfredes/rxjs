define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //const obs$ = of<number>(1,2,3,4,5,6);
    //const obs$ = of<number>(...[1,2,3,4,5,6]);
    const obs$ = rxjs_1.of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));
    console.log('Inicio del Obs$');
    obs$.subscribe(next => console.log('next', next), () => console.log('error'), () => console.log('terminamos la secuencia'));
    console.log('Fin del Obs$');
});
