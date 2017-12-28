
import { fromJS } from 'immutable';
import searchFormReducer from '../reducer';

describe('searchFormReducer', () => {
  it('returns the initial state', () => {
    expect(searchFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
