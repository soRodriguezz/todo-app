

export class Todo {

    constructor( tarea ){
        this.tarea = tarea;
        this.Id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

}

