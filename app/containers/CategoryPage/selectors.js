import { createSelector } from 'reselect';

/**
 * Direct selector to the categoryPage state domain
 */
const selectCategoryPageDomain = (state) => state.get('categoryPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CategoryPage
 */

const makeSelectCategoryPage = () => createSelector(
  selectCategoryPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectCategoryPage;
export {
  selectCategoryPageDomain,
};
