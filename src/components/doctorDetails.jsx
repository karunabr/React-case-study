import React, { Component }from "react";
import DoctorService from "../services/doctorService";

class DoctorDetails extends Component{
    state = {
        doctorList: {
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
    componentDidMount(){
        DoctorService.getDoctorById(this.props.match.params.id).then((res)=>
         this.setState({doctor:res.data})
        ); 
    } 

    handleChange=(event)=>{
        event.preventDefault();
        const doctorList=this.state.doctorList;
        doctorList[event.currentTarget.name]=event.currentTarget.value;
        this.setState({ doctorList });
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.doctorList);
        DoctorService.updateDoctor(
            this.props.match.params.id,
            this.state.doctor
            
        ).then((res)=>{
            this.props.history.push("/doctors");
        });
    };
    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
                  <h1>{this.props.match.params.id}</h1>
                  <div className="mb-3">
                      <label htmlFor="doctorId" className="form-label">
                          Doctor Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="doctorId"
                        name="doctorId"
                        value={this.state.doctorList.doctorId}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="doctorName" className="form-label">
                          Doctor Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="doctorName"
                        name="doctorName"
                        value={this.state.doctorList.doctorName}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="contactNumber" className="form-label">
                          Contact Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactNumber"
                        name="contactNumber"
                        value={this.state.doctorList.contactNumber}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="hoursOfAvailability" className="form-label">
                         Hours Of Availability
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="hoursOfAvailability"
                        name="hoursOfAvailability"
                        value={this.state.doctorList.hoursOfAvailability}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="specialization" className="form-label">
                          Specialization
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="specialization"
                        name="specialization"
                        value={this.state.doctorList.specialization}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="degree" className="form-label">
                         Degree
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="degree"
                        name="degree"
                        value={this.state.doctorList.degree}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="yearsOfExperience" className="form-label">
                          Years Of Experience
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        value={this.state.doctorList.yearsOfExperience}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="doctorFee" className="form-label">
                           Doctor Fee
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="doctorFee"
                        name="doctorFee"
                        value={this.state.doctorList.doctorFee}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
                      Save
                  </button>
                  <button
                    className="btn btn-secondary mr-2 float-right"
                    onClick={()=>{
                        this.props.history.push("/doctors");
                    }}
                  >
                    Cancel
                  </button>
              </form>
            </div>
        );
    }
}

export default DoctorDetails;