import { expect } from 'chai';
import reducer from '../../src/reducers/task';
import * as actions from '../../src/actions/task-actions';

describe('task reducer >', () => {
	it('returns default', () => {
		const initialState = undefined;
		const expected = {
			byId: {},
			allIds: [],
			byList: {},
			isFetching: false
		};

    const action = { type: 'any' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(expected);
  });

	it('adds task-list to store', () => {
		const initialState = undefined;
		const expected = {
			byId: {
				123: { id: 123, task_list_id: 23, name: "First task" },
				222: { id: 222, task_list_id: 5, name: "Some other task" },
				321: { id: 321, task_list_id: 23, name: "Last task" },
			},
			byList: {
				5: [ 222 ],
				23: [ 123, 321 ],
			},
      allIds: [
        123,
        222,
        321,
      ],
			isFetching: false,
		};

    const action = {
			type: 'RECEIVE_TASKS',
			data: [
				{ id: 123, task_list_id: 23, name: "First task" },
				{ id: 222, task_list_id: 5, name: "Some other task" },
				{ id: 321, task_list_id: 23, name: "Last task" }
			]
		};

    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(expected);
  });
});
