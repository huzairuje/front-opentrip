import React, {Component} from 'react';
import RegisterForm from './RegisterForm.js';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
            

        }
    }

    Register(){
        console.log('this.state', this.state)
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-3 col-md-offset-3">
                    <RegisterForm />
                </div>
            </div>
        )
    }
}

export default Register;