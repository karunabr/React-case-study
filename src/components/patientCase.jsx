import React, { Component } from "react";
import PatientCaseService from "../services/patientCaseService";
import{Link} from "react-router-dom";
import _ from "lodash";

//imrc & cc
class PatientCase extends Component {
    state = {
        patientCases: [],
        sortColumn:{path:"title",order:"asc"},
        search: "",
        patientCase: {
            patientCaseId: "",
            medicines: "",
            associateDoctorName: "",
            medicineFee: "",
            appointmentDate: "",
            diseaseDescription: "",
            currentTreatment: "",
            patientId: "",
        }
    };

    componentDidMount() {
        PatientCaseService.showAllPatientCase().then((res)=> {
          console.log("data: ", res.data);
          this.setState({ patientCases: res.data });
        });
        console.log("patientCases: ", this.state.patientCases);
    }

     deletePatientCase = (Id) => {
         console.log("Delete patientCase with id:" +Id);
         const patientCases = this.state.patientCases.filter(
            (patientCase) => patientCase.patientCaseId !== Id
         );
         this.setState({ patientCases });
         PatientCaseService.deletePatientCase(Id);
     };

     viewPatientCase = () => {
         let patientCases = [];
         PatientCaseService.getPatientCaseById(this.state.search).then((res) => {
             console.log("**data:" , res.data);
             patientCases = res.data;
         });
         this.setState({ patientCases });
         console.log("** viewPatientCase" + this.state.patientCase);
     };

     handleSort = (path) => {
         console.log(path);
         this.setState({ sortColumn: {path,order: "asc"} });
     };

     onChange = (event) => {
         console.log(event.target.value);
         this.setState({ search: event.target.value });
     };

     render() {
        const { search, sortColumn,patientCases } = this.state;
        var sorted = [];
        if (search) {
          sorted = patientCases.filter((patientCase) => patientCase.patientCaseId ==search); } else {
          sorted = _.orderBy(
            this.state.patientCases,
            [sortColumn.path], 
            [sortColumn.order]
            );
        }
        console.log(this.state.patientCases);
        console.log("Sorted..", sorted);
        return (
          <div className="w-75 mt-5 mx-auto">
            <div className="d-flex justify-content-between">
              <Link to="/patientCase/add" className="btn btn-secondary btn-large mb-1">
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
                  onClick={this.viewPatientCase}
                >
                  Search
                </button>
              </form>
            </div>
    
            <table className="table mt-3">
              <thead className="table-dark">
                <tr>
                  <th onClick={() => this.handleSort("medicines")}>
                    medicines
                  </th>
                
                  <th onClick={() => this.handleSort("associateDoctorName")}>
                    associateDoctorName
                  </th>
                  <th onClick={() => this.handleSort("medicineFee")}>
                  medicineFee
                  </th>
                  <th onClick={() => this.handleSort("appointmentDate")}>
                    appointmentDate
                  </th>
                  <th onClick={() => this.handleSort("diseaseDescription")}>
                    diseaseDescription
                  </th>
                  <th onClick={() => this.handleSort("currentTreatment")}>
                    currentTreatment
                  </th>
                  <th onClick={() => this.handleSort("patientId")}>
                    patientId
                  </th>
                  
    
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((patientCase) => (
                  <tr key={patientCase.patientCaseId}>
                    <td>{patientCase.medicines} </td>
                    <td>{patientCase.associateDoctorName}</td>
                    <td>{patientCase.medicineFee}</td>
                    <td>{patientCase.appointmentDate}</td>
                    <td>{patientCase.diseaseDescription}</td>
                    <td>{patientCase.currentTreatment}</td>
                    <td>{patientCase.patientId}</td>

                    <td>
                      <Link to={`/patientCase/update/${patientCase.patientCaseId}`}>
                        <button className="btn btn-secondary">Update</button>
                      </Link>
                      <button
                        className="btn btn-danger ml-2"
                        onClick={() => this.deletePatientCase(patientCase.patientCaseId)}
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
    export default PatientCase;