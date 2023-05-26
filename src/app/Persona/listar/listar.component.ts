import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Libros } from 'src/app/Modelo/Libros';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

   libros:Libros[];
  constructor(private service:ServiceService, private router:Router) { this.libros=[]}

  ngOnInit(){
 this.service.getLibros()
 .subscribe(data=>{
   this.libros=data;
  })
  }
  Editar(libros:Libros){
    alert("Editar");
   localStorage.setItem("id",libros.id.toString());
   
   alert("id: "+libros.id.toString());
   
   this.router.navigate(["edit"]);
  }
  
  Borrar(id:number){
    this.service.DeletePersonaId(id).subscribe(
      data=>{
        alert("Borrar");
       this.router.navigate(["listar"]);
      });
    
  }
}
