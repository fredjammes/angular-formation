import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from '../../../shared/chat/chat.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, OnDestroy {

  public messages: string[] = [];
  private chatSubscription: Subscription;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatSubscription = this.chatService.messages$.subscribe(message => this.messages.push(message));
  }
  ngOnDestroy(): void {
    this.chatSubscription.unsubscribe();
  }
}
