import React, { Component } from 'react';
import { firebase } from '../../firebase'
import FormField from '../UI/formFields'
import { validate } from '../UI/misc'

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

    updateForm(element){

        const newFormdata = {...this.state.formdata}
        const newElement = {...newFormdata[element.id]}

        newElement.value = element.event.target.value
        newFormdata[element.id] = newElement

        let valiData = validate(newElement)
        newElement.valid = valiData[0]
        newElement.validationMessage = valiData[1]

      
        this.setState({
            fromError: false,
            formdata: newFormdata
        })
    }

    submitForm(event){
        event.preventDefault()

        let dataToSubmit = {}
        let formIsValid = true

        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value
            formIsValid = this.state.formdata[key].valid && formIsValid
        }
        if(formIsValid){
            
            firebase.auth()
            .signInWithEmailAndPassword(
                dataToSubmit.email,
                dataToSubmit.password
            ). then(()=>{
                this.props.history.push('/dashboard')
            }).catch(error =>{
                this.setState({
                    fromError:true
                })
            })
        }else{
            this.setState({
                fromError : true
            })
        }
        

    }


    render() {
        return (
            <div className="container">
                <div className="signin_wrapper" style={{
                    margin:'100px'
                }}>

                    <form onSubmit={(event)=> this.submitForm(event)}>
                        <h2>Please Login</h2>

                        <FormField
                                id={'email'}
                                formdata = {this.state.formdata.email}
                                change={(element)=> this.updateForm(element)}

                                
                            />

                        <FormField
                                id={'password'}
                                formdata = {this.state.formdata.password}
                                change={(element)=> this.updateForm(element)}

                            />
                            {this.state.fromError ? <div className="error_label">Something is wrong, try again</div> : null}
                             <button onClick={(event)=> this.submitForm(event)}>Login</button>

                    </form>

                </div>
                
            </div>
        );
    }
}

export default SignIn;