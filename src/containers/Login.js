import React, { Component, PropTypes }  from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/AuthActions';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return dispatch;
}

@connect(mapDispatchToProps)
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            actions: bindActionCreators(AuthActions, props.dispatch)
        };
        //console.log(this.props, "console.log(this.props);");
        console.log("constructor", this.state.actions);
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    signIn() {
        //const { dispatch } = this.props;
        //const actions = bindActionCreators(AuthActions, dispatch);
        //console.log("actions", actions);
        console.log("actions", this.state.actions);
        var test = this.state.actions.loginUser(this.state.username,this.state.password);
        console.log("test", test)
        if(this.state.username == "admin" && this.state.password == "admin123"){
            localStorage.setItem("auth","admin");
            browserHistory.push('/');
        } else {
            localStorage.removeItem("auth");
        }
    };

    handleUserNameChange(e){
        this.setState({ username: e.target.value });
    }

    handlePasswordChange(e){
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="card card-container">
                    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" className="profile-name-card"></p>
                    <form className="form-signin">
                        <span id="reauth-email" className="reauth-email"></span>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.handleUserNameChange.bind(this)} required autoFocus/>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" onChange={this.handlePasswordChange.bind(this)} required/>
                                <div id="remember" className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me"/> Remember me
                                    </label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block btn-signin" type="button" onClick={() => this.signIn()}>Sign in</button>
                    </form>
                    <a href="javascript:void(0)" className="forgot-password">
                        Forgot the password?
                    </a>
                </div>
            </div>
        )
    }
}