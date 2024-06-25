import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/assets/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  datas:any[] = [];
  usuarioSeleccionado:any; 

  constructor (private dataService:DataService){}

  ngOnInit():void{
    this.dataService.obtenerDatos().subscribe((info:any[])=>
    {
      console.log(info);
      this.datas = info;
    },
  (error:any) =>{
    console.log('Error al obtener los datos', error);
  })
  }

  seleccionarUsuario(usuario:any):void{
    this.usuarioSeleccionado = usuario;
  }

}
