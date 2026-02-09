import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-message',
  imports: [],
  templateUrl: './user-message.component.html',
  styleUrl: './user-message.component.scss'
})
export class UserMessageComponent {
  public userMessage: string = '';

  @Input() set message(value: string) {
    this.userMessage = value;
  }
}
