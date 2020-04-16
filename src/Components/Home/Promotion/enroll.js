import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../UI/formFields'
import { validate } from '../../UI/misc'

import { firebasePromotions } from '../../../firebase'

class Enroll extends Component {

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

    resetFormSuccess(type){
        const newFormdata = {...this.state.formdata}

        for(let key in newFormdata){
            newFormdata[key].value = ""
            newFormdata[key].valid = false
            newFormdata[key].validationMessage = ""
        }

        this.setState({
            fromError: false,
            formdata: newFormdata,
            formSuccess: type ? 'Congratulations' : "already on the database"

        })
        this.successMessage()
    }

    successMessage(){
        setTimeout(()=>{
            this.setState({
                formSuccess:''
            })
        },1500)
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
            firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once("value").then((snapshot)=>{
                if(snapshot.val() === null){
                        firebasePromotions.push(dataToSubmit)
                        this.resetFormSuccess(true)
                }else{
                         this.resetFormSuccess(false)
                }
            })
        }else{
            this.setState({
                fromError : true
            })
        }
    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={ (event)=> this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formdata = {this.state.formdata.email}
                                change={(element)=> this.updateForm(element)}

                            />

                            {this.state.fromError ? <div className="error_label">Something is wrong, try again</div> : null}
                            
                             <div className="success_label">{this.state.formSuccess}</div>
                            <button onClick={(event)=> this.submitForm(event)}>ENROLL</button>
                            <div className="enroll_discl">Lorem epsum disclaimer</div>
                        </div>
                    
                    </form>
                </div>
            </Fade>
            
        );
    }
}

export default Enroll;