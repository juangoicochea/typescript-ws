import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface User {
	id: number;
	name: string;
	lastName: string;
}

export interface FetchUsersAction {
    type: ActionTypes.fetchUsers;
    payload: User[];
  }

export interface DeleteUserAction {
    type: ActionTypes.deleteUser;
    payload: number;
}

const url = 'http://localhost:3001/user';

export const fetchUsers = () => {
    return async (dispatch:  Dispatch) => {
      const response = await axios.get<User[]>(url);
      dispatch<FetchUsersAction>({
        type: ActionTypes.fetchUsers,
        payload: response.data
      })
    };
  };

export const deleteUser = (id: number): DeleteUserAction => {
  return {
    type: ActionTypes.deleteUser,
    payload: id
    };
  };