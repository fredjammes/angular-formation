import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesSource: Subject<string> = new Subject<string>();
  public messages$: Observable<string> = this.messagesSource.asObservable();

  public sendNewMessage(message: string) {
    this.messagesSource.next(message);
  }
}
