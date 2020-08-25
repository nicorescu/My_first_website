import React, { Component } from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {

    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name*' },
            { name: 'email', elementName: 'input', type: 'text', placeholder: 'Your Email*' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your Phone*' }
        ],

        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your Message*' }
        ]
    ]
};



class Contact extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form onSubmit={this.props.handleSubmit} id="contactForm" name="sentMessage" noValidate="novalidate">
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, sectionIndex) => {
                                console.log("rendering section:", sectionIndex, "width:", section);
                                return (
                                    <div className='col-md-6' key={sectionIndex}>
                                        {section.map((field, index) => {
                                            return <Field
                                                {...field}
                                                key={index}
                                                value={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[field.name])}
                                                errors={this.props.errors[field.name]}
                                            />
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                                <button 
                                    className="btn btn-primary btn-xl text-uppercase" 
                                    type="submit"
                                    >Send Message
                                </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),

    validationSchema:Yup.object().shape({
        name: Yup.string().min(3,'Cmon bro').required('You must give us your name'),
        email: Yup.string().email('You need to give us a valid email').required('We need your email'),
        phone: Yup.string().min(10, 'Provide more digits').max(15,'Provide less digits').required('We need your phone number'),
        message: Yup.string().min(100, 'Provide more details').required('Message is required')
    }),


    handleSubmit: (values, {setSubmitting}) => {
        console.log(values);
        alert("You've submitted the form");
    }
})(Contact);