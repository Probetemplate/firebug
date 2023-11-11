import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss'],
})

export class ChatroomComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
