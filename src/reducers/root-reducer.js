import * as types from '../actions/action-types';

const root = (state = {}, action) => {
 	switch (action.type) {
 		case types.INIT_STATE:
 			return Object.assign({}, action.state)

 		default:
 			return state;
 	}
};

export default root;
