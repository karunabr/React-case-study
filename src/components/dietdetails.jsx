import React, { Component } from "react";
import DietService from "../services/dietService";

class DietDetails extends Component {

        state = {
          diet: {
           dietType: "",
            foodtoEat: "",
            dietDuration: "",
            
          },
        };

  componentDidMount() {
    DietService.viewDiet(this.props.match.params.id).then((res) => 
      this.setState({ diet: res.data })
      );
  }

  handleChange = (event) => {
      event.preventDefault();
      const diet = this.state.diet;
    diet[event.currentTarget.name] = event.currentTarget.value;
      this.setState({ diet });
  };

  handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.diet);
      DietService.updateDiet(         
         this.props.match.params.id,
         this.state.diet      
          ).then((res) => {
          this.props.history.push("/diet");
      });
    };
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
                    <h1>{this.props.match.params.id}</h1>

                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">
                            Diet Type
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="type"
                        name="dietType"
                        value={this.state.diet.dietType}
                        onChange={this.handleChange}
                        />
                    </div>

                    <div className="mb-3">
            <label htmlFor="duration" className="form-label">
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
          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/diet");
            }}
          >
              Cancel
          </button>
                </form>
            </div>
        );
    }
    }
  

  export default DietDetails;