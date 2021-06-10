import React, { Component } from "react";
import dietService from "../services/dietService";

class AddDiet extends Component {
  state = {
    diet: {
      dietId:"",
      dietType: "",
      foodtoEat: "",
      dietDuration: "",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
dietService.addDiet(this.state.diet).then((res) => {
      this.props.history.push("/diet");
    });
  };
  handleChange = (event) => {
    const diet = { ...this.state.diet };
    // dynamically handling event changes
    diet[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ diet });
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
                        <label htmlFor="dtId" className="form-label">
                            Diet Id
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="id"
                        name="dietId"
                        value={this.state.diet.dietId}
                        onChange={this.handleChange}
                        autoFocus
                        />
                    </div>
          <div className="mb-3">
            <label htmlFor="dtType" className="form-label">
              Type
            </label>
            <input
              type="text"
              className="form-control"
              id="type"
              name="dietType"
              value={this.state.diet.dietType}
              onChange={this.handleChange}
              autoFocus
            />
          </div>

          <div className="mb-3">
            <label htmlFor="food" className="form-label">
              foodtoEat
            </label>
            <input
              type="text"
              className="form-control"
              id="food"
              name="foodtoEat"
              value={this.state.diet.foodtoEat}
              onChange={this.handleChange}
            />

          </div>
          <div className="mb-3">
            <label htmlFor="Duration" className="form-label">
              Diet Duration
            </label>
            <input
              type="text"
              className="form-control"
              id="duration"
              name="dietDuration"
              value={this.state.diet.dietDuration}
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

export default AddDiet;
