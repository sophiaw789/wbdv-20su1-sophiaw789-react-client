import React from "react";
import { Link } from "react-router-dom";

const LoginComponent = () =>
    <div>
        <h2>Log In</h2>
        <div>
            <div className="form-group row">
                <label for="username" className="col-sm-2 col-form-label">
                    Username</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username" id="username" placeholder="Username" />
                </div>
            </div>
            <div className="form-group row">
                <label for="password" className="col-sm-2 col-form-label">
                    Password</label>
                <div className="col-sm-10">
                    <input id="password" type="password" className="form-control wbdv-field wbdv-password"
                        placeholder="123qwe#$%" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <Link className="btn btn-primary btn-block wbdv-button wbdv-login" to='/profile'>
                        Sign in
                    </Link>
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

export default LoginComponent