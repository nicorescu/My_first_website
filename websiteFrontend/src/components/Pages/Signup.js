import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import * as AuthActions from '../../store/actions/authActions';


const fields = [
    { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name*' },
    { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*' },   
    { name: 'password', elementName: 'input', type: 'password', placeholder: 'Your password*' },
    { name: 'password2', elementName: 'input', type: 'password', placeholder: 'Your password again*' }
]

class Signup extends Component {

    render() {
        return (
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <h1>Sign Up</h1>
                        </div>
                        <div >
                            <form className="row" onSubmit={ e => {
                                e.preventDefault();
                                this.props.register(this.props.values.name, this.props.values.email, this.props.values.password);
                            }}>
                                {fields.map((f, i) => {
                                    return (
                                        <div className="col-md-6" key={i}>
                                            <Field
                                                
                                                {...f}
                                                value={this.props.values[f.name]}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[f.name])}
                                                errors={this.props.errors[f.name]}
                                            ></Field>
                                        </div>
                                    )
                                })}
                                <div className="coll-md-12">
                                    <p className="text-danger text-center">{this.props.auth.error || ''}</p>
                                    <button className="btn btn-primary">Sign up</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (name, email, pass) => {
            dispatch(AuthActions.register(name, email, pass));
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        email: '',
        name: '',
        password: '',
        password2: ''
    }),

    validationSchema: Yup.object().shape({
        name: Yup.string().required("We need your name"),
        email: Yup.string().email('Email is invalid.').required('You need to login with email address'),    
        password: Yup.string().min(8,'Password needs to be at least 8 characters').required('You need to enter password'),
        password2: Yup.string().required("You need to reenter your password").test("pass-match", "Passwords don't match", function(value){
            const {password}=this.parent;
            return password === value;
        })
    }),

    handleSubmit: (values, { setSubmitting }, login) => {
        console.log("Login Attempt:", values);
        //login(values.email, values.password);
    }
})(Signup));