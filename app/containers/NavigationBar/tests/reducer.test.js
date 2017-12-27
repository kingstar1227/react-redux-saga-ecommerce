
import { fromJS } from 'immutable';
import navigationBarReducer from '../reducer';

describe('navigationBarReducer', () => {
  it('returns the initial state', () => {
    expect(navigationBarReducer(undefined, {})).toEqual(fromJS({}));
  });
});
