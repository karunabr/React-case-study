import React, { Component } from "react";
import DoctorService from "../services/doctorService";


class AddDoctor extends Component{
    state={
      doctor:{
        doctorId: "",
        doctorName: "",
        contactNumber: "",
        hoursOfAvailability: "",
        specialization: "",
        degree: "",
        yearsOfExperience: "",
        doctorFee: "",
      },
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Submitted");
        DoctorService.createDoctor(this.state.doctor).then((res)=>{
            this.props.history.push("");

        });
    };
    handleChange=(event)=>{
        const doctor={...this.state.doctor};
        doctor[event.currentTarget.name]=event.currentTarget.value;
        this.setState({doctor});
    };
    render(){
        return(
            <div className="w-50 mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="doctorId" className="form-label">
                           DoctorId
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="doctorId"
                          name="doctorId"
                          value={this.state.doctor.doctorId}
                          onChange={this.handleChange}
                          autoFocus
                        />
                       <label htmlFor="doctorName" className="form-label">
                             Doctor Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="doctorName"
                          name="doctorName"
                          value={this.state.doctor.doctorName}
                          onChange={this.handleChange}
                        />
                       <label htmlFor="contactNumber" className="form-label">
                            Contact Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contactNumber"
                          name="contactNumber"
                          value={this.state.doctor.contactNumber}
                          onChange={this.handleChange}
                        /> 
                        <label htmlFor="hoursOfAvailability" className="form-label">
                             Hours Of Availability
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="hoursOfAvailability"
                          name="hoursOfAvailability"
                          value={this.state.doctor.hoursOfAvailability}
                          onChange={this.handleChange}
                        />  
                       <label htmlFor="specialization" className="form-label">
                              Specialization
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="specialization"
                          name="specialization"
                          value={this.state.doctor.specialization}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="degree" className="form-label">
                              Degree
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="degree"
                          name="degree"
                          value={this.state.doctor.degree}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="yearsOfExperience" className="form-label">
                              Years Of Experience
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="yearsOfExperience"
                          name="yearsOfExperience"
                          value={this.state.doctor.yearsOfExperience}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="doctorFee" className="form-label">
                             Doctor Fee
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="doctorFee"
                          name="doctorFee"
                          value={this.state.doctor.doctorFee}
                          onChange={this.handleChange}
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

export default AddDoctor;