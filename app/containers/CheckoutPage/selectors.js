import { createSelector } from 'reselect';

/**
 * Direct selector to the checkoutPage state domain
 */
const selectCheckoutPageDomain = (state) => state.get('checkoutPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CheckoutPage
 */

const makeSelectCheckoutPage = () => createSelector(
  selectCheckoutPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectCheckoutPage;
export {
  selectCheckoutPageDomain,
};
