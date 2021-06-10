

import React, { Component } from "react";
import DietService from "../services/dietService";
import { Link } from "react-router-dom";
import _ from "lodash";

class Diet extends Component {
  state = {
diets: [],
    sortColumn: { path: "title", order: "asc" },
    search: "",
    diet: {
     dietType: "",
      foodtoEat: "",
      dietDuration: "",
      
    },
  };
  componentDidMount() {
    DietService.showAllDiet().then((res) => 
    {
      console.log("data: ", res.data);
      this.setState({diets: res.data });
    });
    console.log("diets: ", this.state.diets);
  }

  deleteDiet = (id) => {
    console.log("Delete diet with id: " + id);
    const diets = this.state.diets.filter(
      (diet) => diet.dietId !== id
    );
    this.setState({ diets });
    DietService.deleteDiet(id);
  };

  viewDiet = () => {
    let diets = [];
    DietService.viewDiet(this.state.search).then((res) => {
      console.log("**data: ", res.data);
      diets = res.data;
    });
    this.setState({ diets });
    console.log("** viewDiet" + this.state.diet);
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
    const { search, sortColumn,diets } = this.state;
    var sorted = [];
    if (search) {
      sorted = diets.filter((diet) => diet.dietId ==search); } else {
      sorted = _.orderBy(
        this.state.diets,
        [sortColumn.path], 
        [sortColumn.order]
        );
    }
    console.log(this.state.diets);
    console.log("Sorted..", sorted);
    return (
      <div className="w-75 mt-5 mx-auto">
        <div className="d-flex justify-content-between">
          <Link to="/diet/add" className="btn btn-secondary btn-large mb-1">
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
              onClick={this.viewDiet}
            >
              Search
            </button>
          </form>
        </div>

        <table className="table mt-3">
          <thead className="table-dark">
            <tr>
              <th onClick={() => this.handleSort("dietType")}>
                DietType
              </th>
            
              <th onClick={() => this.handleSort("foodtoEat")}>
                DietfoodtoEat
              </th>
              <th onClick={() => this.handleSort("dietDuration")}>
                DietDuration
            </th>

              <th colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((diet) => (
              <tr key={diet.dietId}>
                <td>{diet.dietType} </td>
                <td>{diet.foodtoEat}</td>
                <td>{diet.dietDuration}</td>
                <td>
                  <Link to={`/diet/update/${diet.dietId}`}>
                    <button className="btn btn-secondary">Update</button>
                  </Link>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => this.deleteDiet(diet.dietId)}
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
export default Diet;