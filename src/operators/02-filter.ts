import { range, Observer, fromEvent, from } from 'rxjs';
import { filter, map, mapTo, pluck } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next :', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
}

/**
 * filter: filtras las emisiones de los valores que emite el observable
 */
range(20, 30).pipe(
    filter((value, index) => {
        return value % 2 === 1;
    })
).subscribe(observer);

interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
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

from(personajes).pipe(
    filter(personaje => personaje.tipo === 'Heroe')
).subscribe(observer);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code),
    filter(code => code === 'Enter')
);

keyup$.subscribe(console.log)