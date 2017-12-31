
import { fromJS } from 'immutable';
import checkoutPageReducer from '../reducer';

describe('checkoutPageReducer', () => {
  it('returns the initial state', () => {
    expect(checkoutPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
