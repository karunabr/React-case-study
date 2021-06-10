import React, { Component } from "react";
import patientService from "../services/patientService";

class AddPatient extends Component {
  state = {
    patient: {
      patientId: "",
      patientName: "",
      registrationForm: "",
      patientContactNumber: "",
      symptoms: "",
      createdAt: "",
      updatedAt: "",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    patientService.createPatient(this.state.patient).then((res) => {
      this.props.history.push("/patients");
    });
  };
  handleChange = (event) => {
    const patient = { ...this.state.patient };
    // dynamically handling event changes
    patient[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ patient });
  };

  render() {
    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="patientId" className="form-label">
              PatientId
            </label>
            <input
              type="id"
              className="form-control"
              id="id"
              name="patientId"
              value={this.state.patient.patientId}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="patientName" className="form-label">
              PatientName
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="patientName"
              value={this.state.patient.patientName}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="patientAge" className="form-label">
              PatientAge
            </label>
            <input
              type="patientAge"
              className="form-control"
              id="patientAge"
              name="patientAge"
              value={this.state.patient.patientAge}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="registrationFee" className="form-label">
              RegistrationFee
            </label>
            <input
              type="registrationFee"
              className="form-control"
              id="registrationFee"
              name="registrationFee"
              value={this.state.patient.registrationFee}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="patientContactNumber" className="form-label">
              Patient ContactNumber
            </label>
            <input
              type="number"
              className="form-control"
              id="patientContactNumber"
              name="patientContactNumber"
              value={this.state.patient.contactNumber}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="symptoms" className="form-label">
              Symptoms
            </label>
            <input
              type="symptoms"
              className="form-control"
              id="symptoms"
              name="symptoms"
              value={this.state.patient.symptoms}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="createdAt" className="form-label">
              CreatedAt
            </label>
            <input
              type="date"
              className="form-control"
              id="createdAt"
              name="createdAt"
              value={this.state.patient.createdAt}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="updatedAt" className="form-label">
              UpdatedAt
            </label>
            <input
              type="date"
              className="form-control"
              id="updatedAt"
              name="updatedAt"
              value={this.state.patient.updatedAt}
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

export default AddPatient;
