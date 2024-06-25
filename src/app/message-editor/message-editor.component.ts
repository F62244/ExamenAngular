import { Component } from '@angular/core';
import { MessageService} from 'src/assets/message.service';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.css']
})
export class MessageEditorComponent {

  nuevoMensaje: string= '';

  constructor(private messageService: MessageService){ }

  actualizarMensaje(): void{
    this.messageService.actualizarMensaje(this.nuevoMensaje);
  }
  

}
