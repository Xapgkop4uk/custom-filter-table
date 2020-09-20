import {useState, useEffect} from 'react';
import {User} from '../types';
import {Column} from 'material-table';

export function useUsersTable(): [User[], Column<User>[]] {
  const [users, setUsers] = useState<User[]>([]);
  const [columns, setColumns] = useState<Column<User>[]>([]);

  useEffect(() => {
    const usersFromFile: User[] = require('../../../static/users.json');
    const lookup = usersFromFile.reduce((acc, {plan}) => ({
      ...acc,
      [plan]: plan,
    }), {});

    const columns: Column<User>[] = [
      {title: 'Email', field: 'email'},
      {title: 'User Plan', field: 'plan', type: 'string', lookup},
    ];

    setUsers(usersFromFile);
    setColumns(columns);
  }, []);

  return [users, columns];
}
