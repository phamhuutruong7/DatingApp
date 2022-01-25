import { MessageService } from './../../_services/message.service';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {

  @Input() username: string;
  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  loadMessages(){
    this.messageService.getMessageThread(this.username).subscribe(messages => {
      this.messages = messages;
    })
  }

}
