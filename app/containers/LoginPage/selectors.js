import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = (state) => state.get('loginPage');

/**
 * Other specific selectors
 */
const selectLogin = (state) => state.get('login');

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () => createSelector(
  selectLoginPageDomain,
  (substate) => substate.toJS()
);

const makeSelectLogin = () => createSelector(
  selectLoginPageDomain,
  (substate) => substate.get('login')
);

export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  makeSelectLogin
};
