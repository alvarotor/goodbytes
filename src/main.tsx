import { render } from 'preact'
import { Suspense, lazy } from 'preact/compat'
import { LoadSuspense } from './loadSuspense'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Assuming your i18n configuration is in i18n.ts or i18n.js

const Routes = lazy(() => import('./routes'))

const Main = () => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={<LoadSuspense />}>
        <div>
            <Routes />
        </div>
    </Suspense>
  </I18nextProvider>
);

render(<Main />, document.getElementById('top')!)
