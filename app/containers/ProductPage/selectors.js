import { createSelector } from 'reselect';

/**
 * Direct selector to the productPage state domain
 */
const selectProductPageDomain = (state) => state.get('productPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProductPage
 */

const makeSelectProductPage = () => createSelector(
  selectProductPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectProductPage;
export {
  selectProductPageDomain,
};
