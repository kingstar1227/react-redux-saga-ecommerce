
import { fromJS } from 'immutable';
import cartPageReducer from '../reducer';

describe('cartPageReducer', () => {
  it('returns the initial state', () => {
    expect(cartPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
