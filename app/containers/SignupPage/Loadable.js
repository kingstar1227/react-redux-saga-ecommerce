/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';
import { PlainLoader } from 'components/LoadingIndicator';


export default Loadable({
  loader: () => import('./index'),
  loading: PlainLoader,
});

