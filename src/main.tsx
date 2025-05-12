import { render } from 'preact'
import { Suspense, lazy } from "preact/compat"
import { LoadSuspense } from './loadSuspense'

const Routes = lazy(() => import("./routes"));

const Main = () => (
    <Suspense fallback={<LoadSuspense />}>
        <div>
            <Routes />
        </div>
    </Suspense>
);

render(<Main />, document.getElementById('top')!)
