import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Friend from "../pages/Friend/Friend";
import Mine from "../pages/Mine/Mine";

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/friend" component={Friend} />
      <Route path="/mine" component={Mine} />
    </Switch>
  </Router>
);

export default routes;
