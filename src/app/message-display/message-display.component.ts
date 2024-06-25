import { Component, OnInit } from '@angular/core';
import { MessageService} from 'src/assets/message.service';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit {
  
  mensaje:string= '';

  constructor(private messageService: MessageService){  }

  ngOnInit(): void {
    this.mensaje = this.messageService.obtenerMensaje();
    this.messageService.mensajeCambiado.subscribe(
      (nuevoMensaje:string) => {this.mensaje = nuevoMensaje}
    );
  }

}
