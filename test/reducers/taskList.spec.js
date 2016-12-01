import { expect } from 'chai';
import reducer from '../../src/reducers/taskList';
import * as actions from '../../src/actions/taskListActions';

describe('taskList reducer >', () => {

	it('returns default', () => {
		const initialState = undefined;
		const expected = {
			byId: {},
			allIds: [],
			isFetching: false
		};

    const action = { type: 'any' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(expected);
  });

	it('adds taskList to store', () => {
		const initialState = undefined;
		const expected = {
			byId: {
				123: { id: 123, name: "Some list of stuff" },
				222: { id: 222, name: "another list" },
				321: { id: 321, name: "Batman" },
			},
			allIds: [ 123, 222, 321 ],
			isFetching: false,
		};

    const action = {
			type: 'RECEIVE_TASK_LISTS',
			data: [
				{ name: "Some list of stuff", id:123 },
				{ name: "another list", id:222 },
				{ name: "Batman", id:321 },
			]
		};

		const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(expected);
  });

});
