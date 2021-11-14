import { Component, OnInit } from '@angular/core';
import { User } from '../util/types/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = { name: '', age: 0, email: '', credits: 0 };

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.user = this.usersService.fetchUser();
  }
}
