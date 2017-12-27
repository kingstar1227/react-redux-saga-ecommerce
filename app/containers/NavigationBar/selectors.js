import { createSelector } from 'reselect';

/**
 * Direct selector to the navigationBar state domain
 */
const selectNavigationBarDomain = (state) => state.get('navigationBar');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavigationBar
 */

const makeSelectNavigationBar = () => createSelector(
  selectNavigationBarDomain,
  (substate) => substate.toJS()
);

export default makeSelectNavigationBar;
export {
  selectNavigationBarDomain,
};
