import { UserType } from './user-type';

export interface User {
  phone: string,
  fullName: string,
  name: string,
  type: UserType
}
