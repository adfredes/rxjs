define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const observer = {
        next: value => console.log('next :', value),
        error: error => console.warn('error: ', error),
        complete: () => console.info('complete')
    };
    const hoyEn5 = new Date(); //ahora
    hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
    // El interval es asincrono por naturaleza
    const interval$ = rxjs_1.interval(1000);
    /**
     * Empieza a emitir luego de una cantidad de tiempo y luego emite cada x tiempo.
     * timer( t, x)
     * t: dentro de cuanto se ejecuta en milisegundos o puedo pasarle una fecha (date)
     * x: cada cuanto se ejecuta. Si x no tiene valor se ejecuta 1 sola vez
     */
    const timer$ = rxjs_1.timer(hoyEn5);
    console.log('inicio');
    //interval$.subscribe(observer);
    timer$.subscribe(observer);
    console.log('fin');
});
