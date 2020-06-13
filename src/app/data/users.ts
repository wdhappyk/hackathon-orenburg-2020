import { User } from '../user';
import { UserType } from '../user-type';

export const users: User[] = [
  {
    phone: '(555) 555-12-34',
    fullName: 'Сидоров Иван Федорович',
    name: 'Иван',
    type: UserType.EmployeeOfAdministration,
  },
  {
    phone: '(555) 555-12-35',
    fullName: 'Петров Федор Иванович',
    name: 'Федор',
    type: UserType.Contractor,
  },
];
