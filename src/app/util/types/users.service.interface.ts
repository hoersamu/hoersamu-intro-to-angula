import { User } from './user';

export interface IUsersService {
  getUser: () => User;
}
