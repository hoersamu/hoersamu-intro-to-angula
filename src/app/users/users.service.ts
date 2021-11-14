import { Injectable } from '@angular/core';
import { User } from '../util/types/user';

@Injectable()
export class UsersService {
  fetchUser(): User {
    return {
      name: 'Max Mustermann',
      age: 25,
      email: 'max.mustermann@musterfirma.de',
      credits: 0,
    };
  }
}
