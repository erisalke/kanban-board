import { expect } from 'chai';
import reducer from '../../src/reducers/task-list';
import * as actions from '../../src/actions/task-list-actions';

describe('task-list reducer >', () => {

	it('returns default', () => {
		const initialState = undefined;
		const expected = {
			all: {},
			byId: [],
			isFetching: false
		};

    const action = { type: 'any' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(expected);
  });

	it('adds task-list to store', () => {
		const initialState = undefined;
		const expected = {
			all: {
				123: { id: 123, name: "Some list of stuff" },
				222: { id: 222, name: "another list" },
				321: { id: 321, name: "Batman" },
			},
			byId: [ 123, 222, 321 ],
			isFetching: false,
		};

    const action = {
			type: 'ADD_TASKLIST',
			data: { name: "Some list of stuff", id:123 }
		};
		const action2 = {
			type: 'ADD_TASKLIST',
			data: { name: "another list", id:222 }
		};
		const action3 = {
			type: 'ADD_TASKLIST',
			data: { name: "Batman", id:321 }
		};

    const next1 = reducer(initialState, action);
		const next2 = reducer(next1, action2);
		const nextState = reducer(next2, action3);

    expect(nextState).to.deep.equal(expected);
  });

});
