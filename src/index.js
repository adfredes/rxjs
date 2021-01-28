define(["require", "exports", "rxjs", "rxjs/operators"], function (require, exports, rxjs_1, operators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const observer = {
        next: value => console.log('next :', value),
        error: error => console.warn('error: ', error),
        complete: () => console.info('complete')
    };
    /**
     * tap:
     */
    const numeros$ = rxjs_1.range(1, 5);
    numeros$.pipe(operators_1.tap(x => console.log('antes', x)), operators_1.map(val => val * 10), operators_1.tap(observer))
        .subscribe(val => console.log('subs: ', val));
});
