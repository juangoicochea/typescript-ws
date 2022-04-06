import React from 'react';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import {User, fetchUsers, deleteUser} from '../actions';
import {StoreState} from '../reducers';

interface AppProps {
	users: User[];
	fetchUsers(): any;
	deleteUser: typeof deleteUser;
}

function App(props: AppProps) {
	return (
		<div>
			<button onClick={props.fetchUsers}>FETCH USERS!</button>
			{props.users.map((user: User) => {
				return (
					<div key={user.id}>
						{user.id}) {user.name} {user.lastName} <button onClick={() => props.deleteUser(user.id)}>X</button>
					</div>
				);
			})}
		</div>
	);
}

const mapStateToProps = (state: StoreState): {users: User[]} => {
	return {
		users: state.users,
	};
};

export default connect(
	mapStateToProps, 
	{ fetchUsers, deleteUser }
	)(App);