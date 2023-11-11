import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})

export class HomeComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
