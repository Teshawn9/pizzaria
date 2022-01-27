import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Cart from './containers/Cart'
import Checkout from './containers/Checkout';
import Signup from './containers/Signup';
import ThankYou from './containers/Thankyou';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/cart'} component={Cart} />
                <Route exact path={'/checkout'} component={Checkout} />
                <Route exact path={'/signup'} component={Signup} />
                <Route exact path={'/thankyou'} component={ThankYou} />




            </Switch>
        </>
    );
};
export default Router;
