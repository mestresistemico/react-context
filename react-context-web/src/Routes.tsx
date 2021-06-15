import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import NavBar from "./NavBar";
import Users from './Users';

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;