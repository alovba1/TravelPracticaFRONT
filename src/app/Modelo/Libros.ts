export class Libros {
   id:number;
   titulo:string;
   sinopsis:string;
   n_paginas:string;
   
   
   constructor(id: number, titulo:string, sinopsis:string, n_paginas:string) {
        this. id=id; 
        this.titulo=titulo;
        this.sinopsis=sinopsis;
        this.n_paginas=n_paginas;
        
      }
    }