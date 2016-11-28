import { expect } from 'chai';
import reducer from '../../src/reducers/task';
import * as actions from '../../src/actions/task-actions';

describe('task reducer >', () => {
	it('returns default', () => {
		const initialState = undefined;
		const expected = {
			all: {},
			byId: [],
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
			all: {
				123: { id: 123, task_list_id: 23, name: "First task" },
				222: { id: 222, task_list_id: 5, name: "Some other task" },
				321: { id: 321, task_list_id: 23, name: "Last task" },
			},
			byList: {
				5: [ 222 ],
				23: [ 123, 321 ],
			},
      byId: [
        123,
        222,
        321,
      ],
			isFetching: false,
		};

    const action = {
			type: 'ADD_TASK',
			data: { id: 123, task_list_id: 23, name: "First task" },
		};
		const action2 = {
			type: 'ADD_TASK',
			data: { id: 222, task_list_id: 5, name: "Some other task" },
		};
		const action3 = {
			type: 'ADD_TASK',
			data: { id: 321, task_list_id: 23, name: "Last task" },
		};

    const next1 = reducer(initialState, action);
		const next2 = reducer(next1, action2);
		const nextState = reducer(next2, action3);

    expect(nextState).to.deep.equal(expected);
  });
});
