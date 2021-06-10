import React, { Component } from "react";
import FinanceService from "../services/financeService";

class AddFinance extends Component {
  state = {
    finance: {
      patientName: "",
      registrationFee: "",
      doctorFee: "",
      medicinesAmount: "",
      totalFee: "",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    FinanceService.createFinance(this.state.finance).then((res) => {
      this.props.history.push("/finance");
    });
  };
  handleChange = (event) => {
    const finance = { ...this.state.finance };
    finance[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ finance });
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="patientName" className="form-label">
              Patient Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="patientName"
              value={this.state.finance.patientName}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="registrationFee" className="form-label">
              Registration Fee
            </label>
            <input
              type="registrationFee"
              className="form-control"
              id="registrationFee"
              name="registrationFee"
              value={this.state.finance.registrationFee}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="doctorFee" className="form-label">
              Doctor Fee
            </label>
            <input
              type="doctorFee"
              className="form-control"
              id="doctorFee"
              name="doctorFee"
              value={this.state.finance.doctorFee}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="medicinesAmount" className="form-label">
              Medicines Amount
            </label>
            <input
              type="medicinesAmount"
              className="form-control"
              id="medicinesAmount"
              name="medicinesAmount"
              value={this.state.finance.medicinesAmount}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="totalFee" className="form-label">
              Total Fee
            </label>
            <input
              type="totalFee"
              className="form-control"
              id="totalFee"
              name="totalFee"
              value={this.state.finance.totalFee}
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

export default AddFinance;
