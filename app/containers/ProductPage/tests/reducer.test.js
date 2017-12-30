
import { fromJS } from 'immutable';
import productPageReducer from '../reducer';

describe('productPageReducer', () => {
  it('returns the initial state', () => {
    expect(productPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
