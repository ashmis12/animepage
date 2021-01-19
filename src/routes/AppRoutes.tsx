import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '../components/common/Loading';
const HomePage = lazy(() => import('../components/Homepage/homepage'));
export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/homepage" component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
}
