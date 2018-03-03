import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import HeaderLinks from "./HeaderLinks.jsx";

import appRoutes from "routes/app.jsx";

class Header extends Component {
    state = {
        navCollapsed: true
    };
    onToggleNav = e => {
        this.setState({ navCollapsed: !this.state.navCollapsed });
        // e.preventDefault();
        // document.documentElement.classList.toggle("nav-open");
        // var node = document.createElement('div');
        // node.id = 'bodyClick';
        // node.onclick = function(){
        //     this.parentElement.removeChild(this);
        //     document.documentElement.classList.toggle('nav-open');
        // };
        // document.body.appendChild(node);
    };
    getBrand() {
        var name;
        appRoutes.map((prop, key) => {
            if (prop.collapse) {
                prop.views.map((prop, key) => {
                    if (prop.path === this.props.location.pathname) {
                        name = prop.name;
                    }
                    return null;
                });
            } else {
                if (prop.redirect) {
                    if (prop.path === this.props.location.pathname) {
                        name = prop.name;
                    }
                } else {
                    if (prop.path === this.props.location.pathname) {
                        name = prop.name;
                    }
                }
            }
            return null;
        });
        return name;
    }
    render() {
        return (
            <Navbar fluid inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#pablo">{this.getBrand()}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <HeaderLinks />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
