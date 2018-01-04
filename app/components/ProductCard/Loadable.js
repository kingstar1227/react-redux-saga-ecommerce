/**
 *
 * Asynchronously loads the component for ProductCard
 *
 */

import Loadable from 'react-loadable';
import ProductCardLoader from './ProductCardLoader';

export default Loadable({
  loader: () => import('./index'),
  loading: ProductCardLoader,
});
