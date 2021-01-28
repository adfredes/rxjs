import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next :', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
};

const intervalo$ = new Observable<number>( subs => {
    let count = 0;

    const interval = setInterval( () => {
        count++;
        subs.next(count);

    },
        1000);

    setTimeout(() => {        
        subs.complete();
    }, 2500)

    //funcion que se ejecuta al realizar el unsubscribe
    return () => {
        clearInterval(interval)
        console.log('intervalo destruido');
    }
} );

const subs1 =  intervalo$.subscribe( observer );
const subs2 =  intervalo$.subscribe( observer );
const subs3 =  intervalo$.subscribe( observer );

subs1.add(subs2)
     .add(subs3)

setTimeout(() => subs1.unsubscribe(), 6000)