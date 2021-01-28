define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const observer = {
        next: value => console.log('next :', value),
        error: error => console.warn('error: ', error),
        complete: () => console.info('complete')
    };
    const intervalo$ = new rxjs_1.Observable(subs => {
        //coldobservable
        const intervalId = setInterval(() => subs.next(Math.random()), 1000);
        return () => {
            clearInterval(intervalId);
            console.log('destruido');
        };
    });
    // los valores de los subs son distintos, a diferencia de si se usa Subject
    // const subs1 = intervalo$.subscribe(rnd => console.log('subs1 :', rnd));
    // const subs2 = intervalo$.subscribe(rnd => console.log('subs2 :', rnd));
    /**
     * 1- Casteo multiple
     * 2- Tambien es un observer
     * 3- Next, error y complete
     */
    const subject$ = new rxjs_1.Subject();
    const intervaloSubscription = intervalo$.subscribe(subject$);
    const subs1 = subject$.subscribe(observer);
    const subs2 = subject$.subscribe(observer);
    setTimeout(() => {
        // hotobservable
        subject$.next(10);
        subject$.complete();
        intervaloSubscription.unsubscribe();
    }, 3500);
});
