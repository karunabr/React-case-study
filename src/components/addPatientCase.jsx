import React, { Component } from 'react';
import PatientCaseService from "../services/patientCaseService";


class AddPatientCase extends Component{
    state={
        patientCase:{
            patientCaseId: "",
            medicines: "",
            associateDoctorName: "",
            medicineFee: "",
            appointmentDate: "",
            diseaseDescription: "",
            currentTreatment: "",
            patientId: "",

        },
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Submitted");
        PatientCaseService.addPatientCase(this.state.patientCase).then((res)=>{
            this.props.history.push("/patientCase");

        });
    };
    handleChange=(event)=>{
        const patientCase={...this.state.patientCase};
        //dynamically handling event changes
        patientCase[event.currentTarget.name]=event.currentTarget.value;
        this.setState({patientCase});
    };
    render(){
        return(
            <div className="w-50 mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="patCaseId" className="form-label">
                            PatientCase Id
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="id"
                          name="patientCaseId"
                          value={this.state.patientCase.patientCaseId}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    </div> 
            <div className= "mb-3">            
                       <label htmlFor="med" className="form-label">
                            Medicines
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="medicines"
                          name="medicines"
                          value={this.state.patientCase.medicines}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="DoctorName" className="form-label">
                            Associate DoctorName
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="associateDoctorName"
                          name="associateDoctorName"
                          value={this.state.patientCase.associateDoctorName}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="medFee" className="form-label">
                            Medicine Fee
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="medicineFee"
                          name="medicineFee"
                          value={this.state.patientCase.medicineFee}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="Date" className="form-label">
                            Appointment Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="appointmentDate"
                          name="appointmentDate"
                          value={this.state.patientCase.appointmentDate}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="diseaseDes" className="form-label">
                            Disease Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="description"
                          name="diseaseDescription"
                          value={this.state.patientCase.diseaseDescription}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="Treatment" className="form-label">
                            Current Treatment
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="currentTreatment"
                          name="currentTreatment"
                          value={this.state.patientCase.currentTreatment}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="patId" className="form-label">
                            Patient Id
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="patientid"
                          name="patientId"
                          value={this.state.patientCase.patientId}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>     
                </form>
            </div>
        );
    }
}

export default AddPatientCase;