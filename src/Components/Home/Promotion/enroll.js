import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class Enroll extends Component {

    state = {
        fromError:false,
        formSuccess:"",
        formData:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:"email_input",
                    type:"email",
                    placeholder:'Enter your email'
                },
                validation:{
                    required:true,
                    email:true,
                },
                valid: false,
                validationMessage:''
            }
        }
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Enroll;