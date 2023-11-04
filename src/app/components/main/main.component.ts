import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class VerifyEmailComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
