import React from "react";
import { Link } from "react-router-dom";

const RegisterComponent = () =>
    <div>
        <h2>Register</h2>
        <div>
            <div className="form-group row">
                <label for="usernameFld" className="col-sm-2 col-form-label">
                    Username</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                        id="usernameFld"
                        placeholder="Username"
                        title="Use this username to login" />
                </div>
            </div>

            <div className="form-group row">
                <label for="passwordFld" className="col-sm-2 col-form-label">
                    Password</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-password"
                        id="passwordFld"
                        type="password"
                        placeholder="123qwe#$%" />
                </div>
            </div>

            <div className="form-group row">
                <label for="verifyPasswordFld" className="col-sm-2 col-form-label">
                    Verify Password</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-password-verify"
                        id="verifyPasswordFld"
                        type="password"
                        placeholder="123qwe#$%"
                        title="Must be the same password" />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <Link className="btn btn-primary btn-block wbdv-button wbdv-register" to='/profile'>
                        Sign up
                    </Link>
                    <div className="row">
                        <div className="col-6 wbdv-link wbdv-login">
                            <Link to='/login'>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default RegisterComponent