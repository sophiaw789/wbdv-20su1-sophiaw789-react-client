import React from "react";
import { Link } from "react-router-dom";

export default class LoginComponent extends React.Component {

    state = {
        username: '',
        password: ''
    }

    login = () => {
        fetch("https://wbdv-20su1-sophiaw789-server.herokuapp.com/api/login", {
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        }).then(response => response.json())
            .catch(e => {
                this.props.history.push("/login")
            })
            .then(currentUser => {
                if (currentUser)
                    this.props.history.push("/profile")
            })
    }

    render() {
        return (
            <div>
                <h2>Log In</h2>
                <div>
                    <div className="form-group row">
                        <label for="username" className="col-sm-2 col-form-label">
                            Username</label>
                        <div className="col-sm-10">
                            <input
                                onChange={(e) => this.setState({ username: e.target.value })}
                                className="form-control wbdv-field wbdv-username" id="username" placeholder="Username" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="password" className="col-sm-2 col-form-label">
                            Password</label>
                        <div className="col-sm-10">
                            <input
                                onChange={(e) => this.setState({ password: e.target.value })}
                                id="password" type="password" placeholder="123qwe#$%"
                                className="form-control wbdv-field wbdv-password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                onClick={this.login}
                                className="btn btn-primary btn-block wbdv-button wbdv-login">
                                Log in
                            </button>
                            <div className="row">
                                <div className="col-6 wbdv-link wbdv-forgot-password">
                                    <Link>Forgot Password?</Link>
                                </div>
                                <div className="col-6 wbdv-link wbdv-register">
                                    <Link className="float-right" to='/register'>
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}