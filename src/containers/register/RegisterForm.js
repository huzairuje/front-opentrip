import React, { Component } from 'react';

class RegisterForm extends Component{

    

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="username"
                        onChange={event => this.setState({ username: event.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={event => this.setState({ email: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={event => this.setState({ password: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Confirm Password</label>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="confirm password"
                        onChange={event => this.setState({ confirmpassword: event.target.value })}
                    />
                </div>
                <button
                    className="btn btn-primary btn-lg"
                    type="button"
                    onClick={() => this.RegisterForm()}
                > Sign Up
                            </button>
            </form>
        )
    }

}
export default RegisterForm;