/**
 *
 * Asynchronously loads the component for CheckoutPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
