import React from "react";
import { Link } from "react-router-dom";

const ProfileComponent = () =>
    <div>
        <h2>Profile</h2>

        <div>
            <div className="row">
                <label className="col-sm-2"></label>
                <div className="col-sm-10">
                    <div className="alert alert-success alertFld wbdv-alert " role="alert">
                        Profile successfully saved
            </div>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label" for="username">Username</label>
                <div className="col-sm-10">
                    <input id="usernameFld" className="form-control wbdv-field wbdv-username" type="text"
                        placeholder="Harry" title="Use this username to login" />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label" for="phoneFld">Phone</label>
                <div className="col-sm-10">
                    <input id="phoneFld" className="form-control wbdv-field wbdv-phone" type="tel"
                        placeholder="(555) 777-8888" />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label" for="emailFld">Email</label>
                <div className="col-sm-10">
                    <input id="emailFld" className="form-control wbdv-field wbdv-email" type="email"
                        placeholder="Harry@Hogwarts.com" />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label" for="roleFld">Role</label>
                <div className="col-sm-10">
                    <select id="roleFld" className="form-control wbdv-field wbdv-role">
                        <option value="Faculty">Faculty</option>
                        <option value="Student">Student</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label" for="dobFld">Date of Birth</label>
                <div className="col-sm-10">
                    <input id="dobFld" className="form-control wbdv-field wbdv-dob" type="date" placeholder="mm/dd/yy" />
                </div>
            </div>
        </div>

        <div>
            <div className="form-group row">
                <label className="col-sm-2"></label>
                <div className="col-sm-10">
                    <button id="updateBtn" className="btn btn-primary btn-block wbdv-button wbdv-update">
                        Update</button>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2"></label>
                <div className="col-sm-10">
                    <Link className="btn btn-danger btn-block wbdv-button wbdv-logout" to='/'>
                        Log Out
                    </Link>
                </div>
            </div>
        </div>
    </div>

export default ProfileComponent