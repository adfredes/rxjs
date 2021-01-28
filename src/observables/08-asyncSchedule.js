define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const observer = {
        next: value => console.log('next :', value),
        error: error => console.warn('error: ', error),
        complete: () => console.info('complete')
    };
    /**
     * asyncScheduler
     */
    //setTimeout(() => {}, 3000); 
    const saludar = () => console.log('Hola mundo');
    rxjs_1.asyncScheduler.schedule(saludar, 2000);
    const saludar2 = (nombre) => console.log(`Hola ${nombre}`);
    rxjs_1.asyncScheduler.schedule(saludar2, 2000, 'Alejandro');
    const saludar3 = ({ nombre, apellido }) => console.log(`Hola ${nombre} ${apellido}`);
    rxjs_1.asyncScheduler.schedule(saludar3, 2000, { nombre: 'Alejandro', apellido: 'Fredes' });
    //setInterval(() => {}, 3000);
    const subs = rxjs_1.asyncScheduler.schedule(function (state) {
        console.log('state', state);
        this.schedule(state + 1, 1000);
    }, 3000, 0);
    setTimeout(() => subs.unsubscribe(), 6000);
});
