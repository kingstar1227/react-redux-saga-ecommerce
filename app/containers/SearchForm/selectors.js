import { createSelector } from 'reselect';

/**
 * Direct selector to the searchForm state domain
 */
const selectSearchFormDomain = (state) => state.get('searchForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchForm
 */

const makeSelectSearchForm = () => createSelector(
  selectSearchFormDomain,
  (substate) => substate.toJS()
);

export default makeSelectSearchForm;
export {
  selectSearchFormDomain,
};
