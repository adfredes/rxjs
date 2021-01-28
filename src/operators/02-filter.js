define(["require", "exports", "rxjs", "rxjs/operators"], function (require, exports, rxjs_1, operators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const observer = {
        next: value => console.log('next :', value),
        error: error => console.warn('error: ', error),
        complete: () => console.info('complete')
    };
    /**
     * filter: filtras las emisiones de los valores que emite el observable
     */
    rxjs_1.range(20, 30).pipe(operators_1.filter((value, index) => {
        return value % 2 === 1;
    })).subscribe(observer);
    const personajes = [
        {
            tipo: 'Heroe',
            nombre: 'Batman'
        },
        {
            tipo: 'Heroe',
            nombre: 'Robin'
        },
        {
            tipo: 'Villano',
            nombre: 'Jocker'
        },
    ];
    rxjs_1.from(personajes).pipe(operators_1.filter(personaje => personaje.tipo === 'Heroe')).subscribe(observer);
    const keyup$ = rxjs_1.fromEvent(document, 'keyup').pipe(operators_1.map(event => event.code), operators_1.filter(code => code === 'Enter'));
    keyup$.subscribe(console.log);
});
