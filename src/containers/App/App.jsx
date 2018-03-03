import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "components/Header/Header";

import appRoutes from "routes/app.jsx";

class App extends Component {
    componentDidUpdate(e) {
        if (
            window.innerWidth < 993 &&
            e.history.location.pathname !== e.location.pathname &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {
            document.documentElement.classList.toggle("nav-open");
        }
    }
    render() {
        return (
            <div className="wrapper">
                <div id="main-panel" className="main-panel">
                    <Header {...this.props} />
                    <Switch>
                        {appRoutes.map((prop, key) => {
                            if (prop.name === "Notifications")
                                return (
                                    <Route
                                        path={prop.path}
                                        key={key}
                                        render={routeProps => (
                                            <prop.component
                                                {...routeProps}
                                                handleClick={
                                                    this.handleNotificationClick
                                                }
                                            />
                                        )}
                                    />
                                );
                            if (prop.redirect)
                                return (
                                    <Redirect
                                        from={prop.path}
                                        to={prop.to}
                                        key={key}
                                    />
                                );
                            return (
                                <Route
                                    path={prop.path}
                                    component={prop.component}
                                    key={key}
                                />
                            );
                        })}
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
