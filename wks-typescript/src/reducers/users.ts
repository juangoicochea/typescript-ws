import {User, FetchUsersAction} from '../actions';
import {ActionTypes, Action} from '../actions/types';

export const usersReducer = (
	state: User[] = [], 
	action: Action
	) => {
	switch (action.type) {
		case ActionTypes.fetchUsers:
			return action.payload;
		case ActionTypes.deleteUser:
			return state.filter((user: User) => user.id !== action.payload);
		default:
			return state;
	}
};