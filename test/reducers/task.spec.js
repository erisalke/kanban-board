import { expect } from 'chai';
import reducer from '../../src/reducers/task';
import * as actions from '../../src/actions/taskActions';

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

	it('adds tasks to store', () => {
		const initialState = undefined;
		const expected = {
			byId: {
				111: { id: 111, task_list_id: 23, name: "First task" },
				222: { id: 222, task_list_id: 5, name: "Some other task" },
				3335: { id: 3335, task_list_id: 23, name: "Last task" },
			},
			byList: {
				5: [ 222 ],
				23: [ 3335, 111 ],
			},
      allIds: [
				3335,
				222,
				111,
      ],
			isFetching: false,
		};

    const action = {
			type: 'RECEIVE_TASKS',
			data: [
				{ id: 111, task_list_id: 23, name: "First task" },
				{ id: 222, task_list_id: 5, name: "Some other task" },
				{ id: 3335, task_list_id: 23, name: "Last task" }
			]
		};

    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(expected);
  });
});
