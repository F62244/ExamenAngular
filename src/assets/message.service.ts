import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService{

  mensaje: string = "Este es el mensaje, pero como aún no sabes lo suficiente de Angular, seguro que no lo podés cambiar. 😂";
  mensajeCambiado: Subject<string> = new Subject<string>();

  constructor() { }

  obtenerMensaje():string{
    return this.mensaje;
  }

  actualizarMensaje(nuevoMensaje:string):void {
    this.mensaje = nuevoMensaje;
    this.mensajeCambiado.next(this.mensaje);
  }

}