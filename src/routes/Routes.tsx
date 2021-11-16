import { Redirect, Route, Switch } from 'react-router-dom';
import { ExamplePage } from '../views/ExamplePage/ExamplePage';
import { Home } from '../views/Home/Home';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/example" component={ExamplePage} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={Home} />
      <Route component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};
