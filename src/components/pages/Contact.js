import React, {Component} from 'react';
import Field from '../Common/Field';

const fields = {
    sections: [
        [
            {elementName:'input', name:'name', type:'text', placeholder:"Your name *", divClass:"form-group"},
            {elementName:'input', name:'email', type:'email', placeholder:"Your email *", divClass:"form-group"},
            {elementName:'input', name:'phone', type:'tel', placeholder:"Your phone number *", divClass:"form-group mb-md-0"},
        ],
        [
            {elementName:'textarea', name:'message', type:'text', placeholder:"Type your message *", divClass:"form-group form-group-textarea mb-md-0"} 
        ]
    ]
}
class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
        }
    }

    submitForm = (e) => {
        alert("Form  submitted. Thank you, very much.");
    }
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>      
                    <form id="contactForm" name="sentMessage" onSubmit={e => this.submitForm(e)}>
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, sectionIndex) => {
                                console.log("Rendering section", sectionIndex, "with", section)

                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                    {section.map((field, index) => {
                                        return <Field 
                                                    {...field} 
                                                    key={index} 
                                                    value={this.state[field.name]}
                                                    onChange={e => this.setState({[field.name]: e.target.value})}
                                                />
                                    })}
                                    </div>
                                )
                            })}
                             
                            
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button 
                                className="btn btn-primary btn-xl text-uppercase" 
                                id="sendMessageButton" 
                                type="submit"
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;