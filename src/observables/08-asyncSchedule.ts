import { asyncScheduler, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next :', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
}



/**
 * asyncScheduler
 */

 //setTimeout(() => {}, 3000); 


 const saludar = () => console.log('Hola mundo');
 asyncScheduler.schedule( saludar, 2000 );

 const saludar2 = (nombre: string) => console.log(`Hola ${nombre}`);
 asyncScheduler.schedule( saludar2, 2000, 'Alejandro' );

 const saludar3 = ({nombre, apellido}) => console.log(`Hola ${nombre} ${apellido}`);
 asyncScheduler.schedule( saludar3, 2000, {nombre:'Alejandro', apellido:'Fredes'} );



 //setInterval(() => {}, 3000);
 
 const subs = asyncScheduler.schedule(function (state){
    console.log('state', state);
    this.schedule( state + 1, 1000);
 }, 3000, 0);

 setTimeout(() => subs.unsubscribe(), 6000);
