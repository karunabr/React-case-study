import React, { Component } from "react";
import PolicyService from "../services/policyService";

class PolicyDetails extends Component {
  state = {
    policy: {
      policyId: "",
      policyName: "",
      createDate: "",
      endDate: "",
      maximumAmount: "",
    },
  };
  componentDidMount() {
    PolicyService.getByPolicyId(this.props.match.params.id).then((res) =>
      this.setState({ policy: res.data })
    );
  }

  handleChange = (event) => {
    event.preventDefault();
    const policy = this.state.policy;
    policy[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ policy });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.policy);
    PolicyService.updatePolicy(
      this.state.policy,
      this.props.match.params.name
    ).then((res) => {
      console.log(res);
      this.props.history.push("/policies");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.id}</h1>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              PolicyName
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="policyName"
              value={this.state.policy.policyName}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="createDate" className="form-label">
              CreateDate
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="createDate"
              value={this.state.policy.createDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">
              EndDate
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="endDate"
              value={this.state.policy.endDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="maximumAmount" className="form-label">
              MaximumAmount
            </label>
            <input
              type="number"
              className="form-control"
              id="number"
              name="maximumAmount"
              value={this.state.policy.maximumAmount}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/policies");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default PolicyDetails;
