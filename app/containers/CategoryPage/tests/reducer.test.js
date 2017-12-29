
import { fromJS } from 'immutable';
import categoryPageReducer from '../reducer';

describe('categoryPageReducer', () => {
  it('returns the initial state', () => {
    expect(categoryPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
