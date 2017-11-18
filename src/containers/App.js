import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li role="presentation" className={this.props.location.pathname== '/' || this.props.location.pathname== '/Home' ? "active": ""}><Link to={`/Home`}>Home</Link></li>
                    <li role="presentation" className={this.props.location.pathname== '/About' ? "active": ""}><Link to={`/About`}>About</Link></li>
                    <li role="presentation" className={this.props.location.pathname== '/Contact' ? "active": ""}><Link to={`/Contact`}>Contact</Link></li>
                    <li role="presentation" className={this.props.location.pathname== '/login' ? "active pull-right": "pull-right"}><Link to={`/login`} onClick={() => localStorage.removeItem("auth")}>Logout</Link></li>
                </ul>
                <div className="tab-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}