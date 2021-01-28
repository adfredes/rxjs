import { fromEvent } from 'rxjs';

/**
 * Eventos del dom
 */

const src1$ = fromEvent<MouseEvent>(document, 'click');
 
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observer = {
    next: val => console.log('next', val)
};

src1$.subscribe(evento => {
    console.log(evento.clientY);
    console.log(evento.clientX);
});
src2$.subscribe(evento => console.log(evento.key));


