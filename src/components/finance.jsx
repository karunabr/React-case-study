import React, { Component } from "react";
import FinanceService from "../services/financeService";
import { Link } from "react-router-dom";
import _ from "lodash";

class Finance extends Component {
  state = {
    finances: [],
    sortColumn: { path: "title", order: "asc" },
    search: "",
    finance: {
      financeId: "",
      patientName: "",
      registrationFee: "",
      doctorFee: "",
      medicinesAmount: "",
      totalFee: "",
    },
  };
  componentDidMount() {
    FinanceService.findAllFinanceDetails().then((res) => {
      console.log("data: ", res.data);
      this.setState({ finances: res.data });
    });
    console.log("finances: ", this.state.finances);
  }
  deleteFinance = (financeId) => {
    console.log("Delete finance with ID: " + financeId);
    const finances = this.state.finances.filter(
      (finance) => finance.financeId !== financeId
    );
    this.setState({ finances });
    FinanceService.deleteFinance(financeId);
  };
  viewFinance = () => {
    let finances = [];
    FinanceService.findByFinanceId(this.state.search).then((res) => {
      console.log("**data: ", res.data);
      finances = res.data;
    });
    this.setState({ finances });
    console.log("** viewFinance" + this.state.finance);
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
    const { search, sortColumn, finances } = this.state;
    var sorted = [];
    if (search) {
      sorted = finances.filter((finance) => finance.financeId == search);
    } else {
      sorted = _.orderBy(
        this.state.finances,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.finances);
    console.log("Sorted..", sorted);
    return (
      <div className="w-75 mt-5 mx-auto">
        <div className="d-flex justify-content-between">
          <Link
            to="/finance/addFinance"
            className="btn btn-secondary btn-large mb-1"
          >
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
              onClick={this.viewFinance}
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-center" style={{ fontFamily: "sans-serif" }}>
            Finance List
          </h3>
        </div>

        <table className="table mt-3">
          <thead className="table-dark">
            <tr>
              <th onClick={() => this.handleSort("patientName")}>
                Patient Name
              </th>
              <th onClick={() => this.handleSort("registrationFee")}>
                Registration Fee
              </th>
              <th onClick={() => this.handleSort("doctorFee")}>Doctor Fee</th>
              <th onClick={() => this.handleSort("medicinesAmount")}>
                Medicines Amount
              </th>
              <th onClick={() => this.handleSort("totalFee")}>Total Fee</th>
              <th colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((finance) => (
              <tr key={finance.financeId}>
                <td>{finance.patientName}</td>
                <td>{finance.registrationFee}</td>
                <td>{finance.doctorFee}</td>
                <td>{finance.medicinesAmount}</td>
                <td>{finance.totalFee}</td>
                <td>
                  <Link to={`/finance/updateFinance/${finance.financeId}`}>
                    <button className="btn btn-secondary ml-2">Update</button>
                  </Link>

                  <button
                    className="btn btn-danger ml-1"
                    onClick={() => this.deleteFinance(finance.financeId)}
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
export default Finance;
