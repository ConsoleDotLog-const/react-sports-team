import React, { Component } from 'react';
import AdminLayout from '../../../HOC/Admin_layout'

import FormField from '../../UI/formFields'
import { validate } from '../../UI/misc'

import { firebaseTeams, firebaseDB, firebaseMatches } from '../../../firebase'
import { firebaseLooper } from '../../UI/misc'


class addEditMatches extends Component {

state = {
    matchId:'',
    formType:'',
    formError:false,
    formSuccess:'',
    teams:[],
    formdata:{
        date:{
            element:'input',
            value:'',
            config:{
                label:"Event Date",
                name:"date_input",
                type:"date",
            },
            validation:{
                required:true,
            },
            valid: false,
            validationMessage:'',
            showlabel:true
        },
        local:{
            element:'select',
            value:'',
            config:{
                label:"Select a local team",
                name:"select_local",
                type:"select",
                options:[]
            },
            validation:{
                required:true,
            },
            valid: false,
            validationMessage:'',
            showlabel:true
        },
        resultLocal:{
            element:'input',
            value:'',
            config:{
                label:"Result local",
                name:"result_local_input",
                type:"txt",
            },
            validation:{
                required:true,
            },
            valid: false,
            validationMessage:'',
            showlabel: false,
        }, 
        away:{
            element:'select',
            value:'',
            config:{
                label:"Select an Away team",
                name:"select_away",
                type:"select",
                options:[]
            },
            validation:{
                required:true,
            },
            valid: false,
            validationMessage:'',
            showlabel:true
        },
        resultAway:{
            element:'input',
            value:'',
            config:{
                label:"Result Away",
                name:"result_away_input",
                type:"txt",
            },
            validation:{
                required:true,
            },
            valid: false,
            validationMessage:'',
            showlabel: false,
        },
        referee:{
            element:'input',
            value:'',
            config:{
                label:"Referee",
                name:"referee_input",
                type:"txt",
            },
            validation:{
                required:true,
            },
            valid: false,
            validationMessage:'',
            showlabel:true
        },
        stadium:{
            element:'input',
            value:'',
            config:{
                label:"Stadium",
                name:"stadium_input",
                type:"txt",
            },
            validation:{
                required:true,
            },
            valid: false,
            validationMessage:'',
            showlabel:true
        },
        result:{
            element:'select',
            value:'',
            config:{
                label:"Team result",
                name:"select_result",
                type:"select",
                options:[
                    {key:"W", value:"W" },
                    {key:"L", value:"L" },
                    {key:"D", value:"D" },
                    {key:"n/a", value:"n/a" }
                ]
            },
            validation:{
                required:true,
            },
            valid: false,
            validationMessage:'',
            showlabel:true
        },
        final:{
            element:'select',
            value:'',
            config:{
                label:"Game played?",
                name:"select_played",
                type:"select",
                options:[
                    {key:"Yes", value:"Yes" },
                    {key:"No", value:"No" },
                ]
            },
            validation:{
                required:true,
            },
            valid: false,
            validationMessage:'',
            showlabel:true
        },
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

        componentDidMount(){
            const matchId = this.props.match.params.id;

            if(!matchId){
                /// ADD MATCH
            }else{
                firebaseDB.ref(`match/${matchId}`).once('value').then((snapshot)=>{
                    const match = snapshot.val()

                    console.log(match)
                })
            }
        }

    render(){
    return (
        <AdminLayout>   
            <div className="editmatch_dialog_wrapper">
                <h2>
                    {this.state.formType}
                </h2>
                <div>
                    <form onSubmit={(event)=>this.submitForm(event)}>
                    <FormField
                        id={'date'}
                        formdata = {this.state.formdata.date}
                        change={(element)=> this.updateForm(element)}
                     />
                    <div className="select_team_layout">
                        <div className="label_inputs">Local</div>
                        <div className="wrapper">
                            <div className="letf">
                            <FormField
                                id={'local'}
                                formdata = {this.state.formdata.local}
                                change={(element)=> this.updateForm(element)}
                            />
                            </div>
                            <div>
                            <FormField
                                id={'resultLocal'}
                                formdata = {this.state.formdata.resultLocal}
                                change={(element)=> this.updateForm(element)}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="select_team_layout">
                        <div className="label_inputs">Away</div>
                        <div className="wrapper">
                            <div className="letf">
                            <FormField
                                id={'away'}
                                formdata = {this.state.formdata.away}
                                change={(element)=> this.updateForm(element)}
                            />
                            </div>
                            <div>
                            <FormField
                                id={'resultAway'}
                                formdata = {this.state.formdata.resultAway}
                                change={(element)=> this.updateForm(element)}
                            />
                            </div>
                        </div>
                    </div>

                    <div className="split_fields">
                    <FormField
                                id={'referee'}
                                formdata = {this.state.formdata.referee}
                                change={(element)=> this.updateForm(element)}
                            />
                            <FormField
                                id={'stadium'}
                                formdata = {this.state.formdata.stadium}
                                change={(element)=> this.updateForm(element)}
                            />

                    </div>
                    <div className="split_fields last">
                            <FormField
                                id={'result'}
                                formdata = {this.state.formdata.result}
                                change={(element)=> this.updateForm(element)}
                            />
                              <FormField
                                id={'final'}
                                formdata = {this.state.formdata.final}
                                change={(element)=> this.updateForm(element)}
                            />
                    </div>

                    <div className="success_label">{this.state.formSuccess}</div>
                    {this.state.formError ? 
                        <div className="error_label">Something is wrong</div>
                        : ''
                    }

                    <div className="admin_submit">
                        <button onClick={(event)=>this.submitForm(event)}>
                            {this.state.formType}
                        </button>
                    </div>
                    </form>
                </div>

            </div>
           

          

        </AdminLayout>
    );
        }
};

export default addEditMatches;
