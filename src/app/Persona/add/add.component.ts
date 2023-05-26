import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Libros } from 'src/app/Modelo/Libros';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserValidator } from 'src/app/Validaciones';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id : number = 0;
  titulo="";
  sinopsis="";
  n_paginas="";
 

dataFormServer = {};
registered = false;
errorRegistered=false;
channelForm: FormGroup; 

  constructor(private router:Router, private service:ServiceService, public fb:FormBuilder) {
this.channelForm=this.fb.group({
id : '',
name: ['',Validators.compose([
  Validators.required,
  Validators.minLength(3),
  UserValidator.verificarDatos
])]
})
}

  ngOnInit()  {
  }
 
  Guardar()
  {
    const libros = new Libros(this.id,this.titulo,this.sinopsis,this.n_paginas);
    
    this.service.createLibros(libros).subscribe(
      data=>{
        alert("se agrego con exito"+this.id);
       this.router.navigate(["listar"]);
      },
      error=>{
             }
    )
}
}