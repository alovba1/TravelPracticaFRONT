import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TRAVEL';
  constructor(private router:Router, private service:ServiceService){}
  Listar(){
    this.router.navigate(['listar']);
  }
  Nuevo(){
    this.router.navigate(['add']);
  }
  Editar(){
    this.router.navigate(['edit']);
  }
  Guardar(){
    alert("se agrego con exito");
}
}
