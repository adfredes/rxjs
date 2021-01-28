define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const observer = {
        next: value => console.log('next :', value),
        error: error => console.warn('error: ', error),
        complete: () => console.info('complete')
    };
    const intervalo$ = new rxjs_1.Observable(subs => {
        let count = 0;
        const interval = setInterval(() => {
            count++;
            subs.next(count);
        }, 1000);
        setTimeout(() => {
            subs.complete();
        }, 2500);
        //funcion que se ejecuta al realizar el unsubscribe
        return () => {
            clearInterval(interval);
            console.log('intervalo destruido');
        };
    });
    const subs1 = intervalo$.subscribe(observer);
    const subs2 = intervalo$.subscribe(observer);
    const subs3 = intervalo$.subscribe(observer);
    subs1.add(subs2)
        .add(subs3);
    setTimeout(() => subs1.unsubscribe(), 6000);
});
