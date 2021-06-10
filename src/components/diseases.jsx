import React, { Component } from "react";
import DiseaseService from "../services/diseaseService";
import { Link } from "react-router-dom";
import _ from "lodash";

class Diseases extends Component {
  state = {
    diseases: [],
    sortColumn: { path: "title", order: "asc" },
    search: "",
    disease: {
      diseaseId: "",
      diseaseName: "",
      diseaseType: "",
      diseaseSymptoms: "",
    },
  };
  componentDidMount() {
    DiseaseService.getAllDiseases().then((res) => {
      console.log("data: ", res.data);
      this.setState({ diseases: res.data });
    });
    console.log("diseases: ", this.state.diseases);
  }

  deleteDisease = (id) => {
    console.log("Delete student with id: " + id);
    const diseases = this.state.diseases.filter(
      (disease) => disease.diseaseId !== id
    );
    this.setState({ diseases });
    DiseaseService.deleteDisease(id);
  };

  viewDisease = () => {
    let diseases = [];
    DiseaseService.getDiseaseById(this.state.search).then((res) => {
      console.log("**data: ", res.data);
      //this.setState({ disease: res.data });
      diseases = res.data;
    });
    this.setState({ diseases });
    console.log("** viewDisease" + this.state.disease);
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
    const { search, sortColumn, diseases } = this.state;
    var sorted = [];
    if (search) {
      sorted = diseases.filter((disease) => disease.diseaseId == search);
    } else {
      sorted = _.orderBy(
        this.state.diseases,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.diseases);
    console.log("Sorted..", sorted);
    return (
      <div className="w-75 mt-5 mx-auto">
        <div className="d-flex justify-content-between">
          <Link to="/diseases/add" className="btn btn-secondary btn-large mb-1">
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
            
          </form>
        </div>

        <table className="table mt-3">
          <thead className="table-dark">
            <tr>
              <th onClick={() => this.handleSort("diseaseId")}>Id</th>
              <th onClick={() => this.handleSort("diseaseName")}>Name</th>
              <th onClick={() => this.handleSort("diseaseType")}>Type</th>
              <th onClick={() => this.handleSort("diseaseSymptoms")}>Symptoms</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((disease) => (
              <tr key={disease.diseaseId}>
                <td>{disease.diseaseId}</td>
                <td>{disease.diseaseName}</td>
                <td>{disease.diseaseType}</td>
                <td>{disease.diseaseSymptoms}</td>
                <td>
                  <Link to={`/diseases/update/${disease.diseaseId}`}>
                    <button className="btn btn-secondary">Update</button>
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => this.deleteDisease(disease.diseaseId)}
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

export default Diseases;
