import React, { Component } from "react";
import DiseaseService from "../services/diseaseService";

class AddDisease extends Component {
  state = {
    disease: {
        diseaseId: "",
        diseaseName: "",
        diseaseType: "",
        diseaseSymptoms: "",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    DiseaseService.createDisease(this.state.disease).then((res) => {
      this.props.history.push("/diseases");
    });
  };
  handleChange = (event) => {
    const disease = { ...this.state.disease };
    // dynamically handling event changes
    disease[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ disease });
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="diseaseId" className="form-label">
              Disease Id
            </label>
            <input
              type="text"
              className="form-control"
              id="Id"
              name="diseaseId"
              value={this.state.disease.diseaseId}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="diseaseName" className="form-label">
              Disease Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              name="diseaseName"
              value={this.state.disease.diseaseName}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="diseaseType" className="form-label">
              Disease Type
            </label>
            <input
              type="text"
              className="form-control"
              id="Type"
              name="diseaseType"
              value={this.state.disease.diseaseType}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="diseaseSymptoms" className="form-label">
              Disease Symptoms
            </label>
            <input
              type="text"
              className="form-control"
              id="Symptoms"
              name="diseaseSymptoms"
              value={this.state.disease.diseaseSymptoms}
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

export default AddDisease;
