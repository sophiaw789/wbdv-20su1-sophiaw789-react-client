import React from "react";

export default class ProfileComponent extends React.Component {
    state = {
        username: '',
        password: '',
        updateClicked: false
    }

    componentDidMount() {
        fetch("https://wbdv-20su1-sophiaw789-server.herokuapp.com/api/profile", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .catch(e => {
                this.props.history.push("/")
            })
            .then(user => {
                if (user)
                    this.setState({
                        username: user.username, password: user.password
                    })
            })
    }

    update = () => {
        fetch("https://wbdv-20su1-sophiaw789-server.herokuapp.com/api/profile", {
            body: JSON.stringify({ username: this.state.username, password: this.state.password }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',
            credentials: "include"
        })
            .then(response => response.json())
            .then(user => this.setState({
                username: user.username, password: user.password, buttonClicked: false
            }))
    }

    logout = () => {
        fetch("https://wbdv-20su1-sophiaw789-server.herokuapp.com/api/logout", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => this.props.history.push("/"))
    }

    render() {
        return (
            <div>
                <h2>Profile</h2>
                <div>
                    {
                        this.state.buttonClicked &&
                        <div className="row">
                            <label className="col-sm-2"></label>
                            <div className="col-sm-10">
                                <div className="alert alert-success alertFld wbdv-alert " role="alert">
                                    Profile successfully saved
                        </div>
                            </div>
                        </div>
                    }

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" for="username">Username</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })}
                                id="usernameFld" className="form-control wbdv-field wbdv-username" type="text"
                                placeholder="Harry" title="Use this username to login" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" for="password">Password</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                                id="passwordFld" className="form-control wbdv-field wbdv-password" type="password"
                                placeholder="Harry" title="Use this password to login" />
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
                            <button
                                onClick={this.update}
                                id="updateBtn" className="btn btn-primary btn-block wbdv-button wbdv-update">
                                Update</button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2"></label>
                        <div className="col-sm-10">
                            <button
                                onClick={this.logout}
                                className="btn btn-danger btn-block wbdv-button wbdv-logout">
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}