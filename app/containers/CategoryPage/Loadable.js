/**
 *
 * Asynchronously loads the component for CategoryPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
