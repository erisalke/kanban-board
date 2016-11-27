import { expect } from 'chai';
import reducer from '../../src/reducers/task-list';
import * as actions from '../../src/actions/task-list-actions';

describe('task-list reducer >', () => {

	it('returns default', () => {
		const initialState = undefined;
		const expected = { items: [], isFetching: false };

    const action = { type: 'any' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(expected);
  });
});
