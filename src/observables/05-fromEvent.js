define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Eventos del dom
     */
    const src1$ = rxjs_1.fromEvent(document, 'click');
    const src2$ = rxjs_1.fromEvent(document, 'keyup');
    const observer = {
        next: val => console.log('next', val)
    };
    src1$.subscribe(evento => {
        console.log(evento.clientY);
        console.log(evento.clientX);
    });
    src2$.subscribe(evento => console.log(evento.key));
});
