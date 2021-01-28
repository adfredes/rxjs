define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Range
     * Emite una secuencia de numero en base a un rango
     */
    //const src$ = of(1,2,3,4,5);
    const src2$ = rxjs_1.range(1, 5, rxjs_1.asyncScheduler);
    /**
     * asyncScheduler convierte en ascincronica
     */
    console.log('inicio');
    src2$.subscribe(console.log);
    console.log('fin');
    ;
});
