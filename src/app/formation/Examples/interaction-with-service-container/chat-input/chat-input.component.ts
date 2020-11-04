import { Component } from '@angular/core';
import {ChatService} from '../../../shared/chat/chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {

  constructor(private chatService: ChatService) {}

  public sendMessage(chatInput: HTMLInputElement) {
    this.chatService.sendNewMessage(chatInput.value);
    chatInput.value = '';
  }

}
