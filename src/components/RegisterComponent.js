import React from "react";
import { Link } from "react-router-dom";

export default class RegisterComponent extends React.Component {
    state = {
        username: '',
        password: ''
    }

    register = () => {
        fetch("https://wbdv-20su1-sophiaw789-server.herokuapp.com/api/register", {
            body: JSON.stringify({ username: this.state.username, password: this.state.password }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        }).then(response => response.json())
            .then(currentUser => this.props.history.push("/profile"))
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <div>
                    <div className="form-group row">
                        <label for="usernameFld" className="col-sm-2 col-form-label">
                            Username</label>
                        <div className="col-sm-10">
                            <input 
                                onChange={(e) => this.setState({username: e.target.value})}
                                className="form-control wbdv-field wbdv-username"
                                id="usernameFld"
                                placeholder="Username"
                                title="Use this username to login" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="passwordFld" className="col-sm-2 col-form-label">
                            Password</label>
                        <div className="col-sm-10">
                            <input 
                                onChange={(e) => this.setState({password: e.target.value})}
                                className="form-control wbdv-field wbdv-password"
                                id="passwordFld"
                                type="password"
                                placeholder="123qwe#$%" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="verifyPasswordFld" className="col-sm-2 col-form-label">
                            Verify Password</label>
                        <div className="col-sm-10">
                            <input
                                // add verify password function
                                className="form-control wbdv-field wbdv-password-verify"
                                id="verifyPasswordFld"
                                type="password"
                                placeholder="123qwe#$%"
                                title="Must be the same password" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button 
                                onClick={this.register}
                                className="btn btn-primary btn-block wbdv-button wbdv-register">
                                Register
                            </button>
                            <div className="row">
                                <div className="col-6 wbdv-link wbdv-login">
                                    <Link to='/login'>
                                        Log in
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