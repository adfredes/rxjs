define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const observer = {
        next: value => console.log('next :', value),
        error: error => console.warn('error: ', error),
        complete: () => console.info('complete')
    };
    /**
     *  of = toma argumentos y genera una secuencia
     *  from = crea observable en base a un array, promise, iterable, observable
     */
    //const source$ = from([1,2,3,4,5]);
    //const source$ = from('Alejandro');
    //  const source$ = from( fetch('https://api.github.com/users/adfredes') );
    // source$.subscribe(async (resp) => {    
    //     const dataResp = await resp.json();
    //     console.log(dataResp);
    // })
    //source$.subscribe( observer );
    // Funcion generadora
    const miGenerador = function* () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    };
    const miIterable = miGenerador();
    //  for (let id of miIterable){
    //      console.log(id);
    //  }
    rxjs_1.from(miIterable).subscribe(observer);
});
