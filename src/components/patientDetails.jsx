import React, { Component } from "react";
import PatientService from "../services/patientService";

class PatientDetails extends Component {
  state = {
    patient: {
      patientId: "",
      patientName: "",
      patientAge: "",
      registrationFee: "",
      patientContactNumber: "",
      symptoms: "",
      createdAt: "",
      updatedAt: "",
    },
  };
  componentDidMount() {
    PatientService.getPatientById(this.props.match.params.id).then((res) =>
      this.setState({ patient: res.data })
    );
  }

  handleChange = (event) => {
    event.preventDefault();
    const patient = this.state.patient;
    patient[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ patient });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.patient);

    PatientService.updatePatient(
      this.props.match.params.id,
      this.state.patient
    ).then((res) => {
      this.props.history.push("/patients");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.id}</h1>
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
            <label htmlFor="patientage" className="form-label">
              PatientAge
            </label>
            <input
              type="number"
              className="form-control"
              id="patientage"
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
              type="number"
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
              value={this.state.patient.patientContactNumber}
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
              id="date"
              name="date"
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
              id="date"
              name="date"
              value={this.state.patient.updatedAt}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/patients");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default PatientDetails;
