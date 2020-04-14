import React, { Component } from 'react';

class SignIn extends Component {

    state = {
        fromError:false,
        formSuccess:"",
        formdata:{
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
            },
            password:{
                element:'input',
                value:'',
                config:{
                    name:"password_input",
                    type:"password",
                    placeholder:'Enter your password'
                },
                validation:{
                    required:true,
                  
                },
                valid: false,
                validationMessage:''
            }
        }
    }


    render() {
        return (
            <div className="container">
                <div className="signin_wrapper" style={{
                    margin:'100px'
                }}>

                    <form onSubmit={{}}>

                    </form>

                </div>
                
            </div>
        );
    }
}

export default SignIn;