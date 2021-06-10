import React, { Component }from "react";
import PatientCaseService from "../services/patientCaseService";

class PatientCaseDetails extends Component{
    state = {
        patientCase: {
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
    componentDidMount(){
        PatientCaseService.getPatientCaseById(this.props.match.params.id).then((res)=>
         this.setState({ patientCase:res.data })
        ); 
    } 

    handleChange=(event)=>{
        event.preventDefault();
        const patientCase=this.state.patientCase;
        patientCase[event.currentTarget.name]=event.currentTarget.value;
        this.setState({ patientCase });
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.patientCase);
        PatientCaseService.updatePatientCase(
            this.props.match.params.id,
            this.state.patientCase
            ).then((res)=>{
            this.props.history.push("/patientCase");
        });
    };
    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
                  <h1>{this.props.match.params.id}</h1>
                  <div className="mb-3">
                      <label htmlFor="patcaseId" className="form-label">
                          patientCase Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="patientCaseId"
                        name="patientCaseId"
                        value={this.state.patientCase.patientCaseId}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
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
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="DoctorName" className="form-label">
                          associate DoctorName
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="associateDoctorName"
                        name="associateDoctorName"
                        value={this.state.patientCase.associateDoctorName}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="medFee" className="form-label">
                      medicine Fee
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="medicineFee"
                        name="medicineFee"
                        value={this.state.patientCase.medicineFee}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="Date" className="form-label">
                      appointment Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="appointmentDate"
                        name="appointmentDate"
                        value={this.state.patientCase.appointmentDate}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="diseaseDes" className="form-label">
                      disease Description
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="diseaseDescription"
                        name="diseaseDescription"
                        value={this.state.patientCase.diseaseDescription}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="Treatment" className="form-label">
                      current Treatment
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="currentTreatment"
                        name="currentTreatment"
                        value={this.state.patientCase.currentTreatment}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="patId" className="form-label">
                      patient Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="patientId"
                        name="patientId"
                        value={this.state.patientCase.patientId}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
                      Save
                  </button>
                  <button
                    className="btn btn-secondary mr-2 float-right"
                    onClick={()=>{
                        this.props.history.push("/patientCase");
                    }}
                  >
                    Cancel
                  </button>
              </form>
            </div>
        );
    }
}

export default PatientCaseDetails;