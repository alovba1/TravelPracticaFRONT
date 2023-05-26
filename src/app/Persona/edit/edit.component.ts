import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Libros } from 'src/app/Modelo/Libros';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id : number = 0;
  titulo="";
  sinopsis="";
  n_paginas="";

  constructor(private router:Router, private service:ServiceService) {
   }

  ngOnInit(): void {

  }


 Editar()
 {
   const libros = new Libros(this.id,this.titulo,this.sinopsis,this.n_paginas);
   alert("valor id"+this.id);
   this.service.updatePersona(libros).subscribe(
     data=>{
       alert("se agrego con exito"+this.id);
      this.router.navigate(["listar"]);
     },
     error=>{

     }
   )
}

}

