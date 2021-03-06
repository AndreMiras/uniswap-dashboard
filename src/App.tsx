import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress'

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Uniswap = lazy(() => import('./routes/Uniswap'));

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/uniswap" component={Uniswap}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  );
}

export default App;
