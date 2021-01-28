define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const observer = {
        next: value => console.log('next :', value),
        error: error => console.warn('error: ', error),
        complete: () => console.info('complete')
    };
    //const obs$ = Observable.create(); no se usa
    const obs$ = new rxjs_1.Observable(subs => {
        subs.next('Hola');
        subs.next('Mundo');
        //forzar error
        const a = undefined;
        a.nombre = 'Fernando';
        // termina el observable
        subs.complete();
        // no se emite
        subs.next('Hola');
        subs.next('Mundo');
    });
    // obs$.subscribe( 
    //     valor => console.log('next: ', valor),
    //     error => console.warn('error: ', error),
    //     () => console.info('complete')
    // );
    obs$.subscribe(observer);
});
