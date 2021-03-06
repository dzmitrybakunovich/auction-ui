import React from 'react';
import {Route, Redirect} from 'react-router-dom';

// handle the private routes
function PrivateRoute({component: Component, ...rest}) {
    return (
         <Route {...rest} render={(props) => (
            localStorage.getItem('isAuth')
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { url: rest.location.pathname }
            }} />
        )} />
    )
}

export default PrivateRoute;