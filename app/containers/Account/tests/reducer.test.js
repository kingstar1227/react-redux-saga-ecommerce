
import { fromJS } from 'immutable';
import accountReducer from '../reducer';

describe('accountReducer', () => {
  it('returns the initial state', () => {
    expect(accountReducer(undefined, {})).toEqual(fromJS({}));
  });
});
