import React, { Component } from "react";
import PatientService from "../services/patientService";
import { Link } from "react-router-dom";
import _ from "lodash";

class Patients extends Component {
  state = {
    patients: [],
    sortColumn: { path: "title", order: "asc" },
    search: "",
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
    PatientService.getAllPatients().then((res) => {
      console.log("data: ", res.data);
      this.setState({ patients: res.data });
    });
    console.log("patients: ", this.state.patients);
  }

  deletePatient = (id) => {
    console.log("Delete patient with id: " + id);
    const patients = this.state.patients.filter(
      (patient) => patient.patientId !== id
    );
    this.setState({ patients });
    PatientService.deletePatient(id);
  };

  viewPatient = () => {
    let patients = [];
    PatientService.getPatientById(this.state.search).then((res) => {
      console.log("**data: ", res.data);
      patients = res.data;
    });
    this.setState({ patients });
    console.log("** viewPatient" + this.state.patient);
  };

  handleSort = (path) => {
    console.log(path);
    this.setState({ sortColumn: { path, order: "asc" } });
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, sortColumn, patients } = this.state;
    var sorted = [];
    if (search) {
      sorted = patients.filter((patient) => patient.patientId == search);
    } else {
      sorted = _.orderBy(
        this.state.patients,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.patients);
    console.log("Sorted..", sorted);
    return (
      <div className="w-75 mt-5 mx-auto">
        <div className="d-flex justify-content-between">
          <Link to="/patients/add" className="btn btn-secondary btn-large mb-1">
            Add
          </Link>
          <form class="form-inline my-2 my-lg-0">
            <input
              className="form-control ml-auto"
              type="search"
              placeholder="Search by Id"
              aria-label="Search"
              onChange={this.onChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.viewPatient}
            >
              Search
            </button>
          </form>
        </div>

        <h2 className="text-center">Patients List</h2>
        <table className="table mt-3">
          <thead className="table-dark">
            <tr>
              <th onClick={() => this.handleSort("patientName")}>Name</th>
              <th onClick={() => this.handleSort("patientAge")}>Age</th>
              <th onClick={() => this.handleSort("registrationFee")}>
                RegistrationFee
              </th>
              <th onClick={() => this.handleSort("patientcontactNumber")}>
                PatientContactNumber
              </th>
              <th onClick={() => this.handleSort("symptoms")}> Symptoms</th>
              <th onClick={() => this.handleSort("createdAt")}> CreatedAt</th>
              <th onClick={() => this.handleSort("updatedAt")}> UpdatedAt</th>
              <th colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((patient) => (
              <tr key={patient.patientId}>
                <td>{patient.patientName}</td>
                <td>{patient.patientAge}</td>
                <td>{patient.registrationFee}</td>
                <td>{patient.patientContactNumber}</td>
                <td>{patient.symptoms}</td>
                <td>{patient.createdAt}</td>
                <td>{patient.updatedAt}</td>
                <td>
                  <Link to={`/patients/update/${patient.patientId}`}>
                    <button className="btn btn-secondary">Update</button>
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => this.deletePatient(patient.patientId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Patients;
