import React, { Component } from "react";
import PatientHistoryService from "../services/patientHistoryService";
import PatientService from "../services/patientService";
import DietService from "../services/dietService";
import DiseaseService from "../services/diseaseService";

class CreatePatientHistory extends Component {
  state = {
    patient_history:[],
    patients:[],
    diets:[],
    diseases:[],
    patientId:"",
    desId:"",
    dietId:"",
    history: {
      patientHistoryId: "",
      recordedDate: "",
      patient:{},
      disease:{},
      diet:{},
    },
  }



  componentDidMount(){
    PatientService.getAllPatients().then((res) => {
    console.log("data: ", res.data);
    // const patientHistory={...this.state.patientHistory,patients: res.data}
    this.setState({ patients: res.data });
  });
  console.log("patients: ", this.state.patients);


  DietService.showAllDiet().then((res) => 
    {
      console.log("data: ", res.data);
      // const patientHistory={...this.state.patientHistory,diets: res.data}
      this.setState({diets: res.data });
    });
    console.log("diets: ", this.state.diets);

    DiseaseService.getAllDiseases().then((res) => {
      console.log("data: ", res.data);
      // const patientHistory={...this.state.patientHistory,diseases: res.data}
      this.setState({ diseases: res.data});
    });
    console.log("diseases: ", this.state.diseases);
}

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    console.log(this.state.history);

    PatientService.getPatientById(this.state.history.patientId).then((res) =>{
    console.log("data: ", res.data);
    const history={...this.state.history,patient:res.data};
    this.setState({ history});
    });

  //this.state.patientId=this.state.history.patient.patientId;
  //this.state.history.patient=this.state.history.patientId;
    

  DiseaseService.getDiseaseById(this.state.history.desId).then((res) =>{
    console.log("data: ", res.data);
    const history={...this.state.history,disease:res.data};
    this.setState({ history});
    });

  //this.state.desId=this.state.history.disease.desId;
  //this.state.history.disease=this.state.history.desId;
  
  DietService.viewDiet(this.state.history.dietId).then((res) => {
    console.log("data: ", res.data);
    const history={...this.state.history,diet:res.data};
    this.setState({ history});
    });

    //this.state.dietId=this.state.history.diet.dietId;
    //this.state.history.diet=this.state.history.dietId;
    
    PatientHistoryService.addPatientHistory(this.state.history).then((res) => {
      this.props.history.push("/history");
      
    });
  };
  handleChange = (event) => {
    const patientHistory = { ...this.state };
    // dynamically handling event changes
    console.log(event.currentTarget.name,event.currentTarget.value);
    patientHistory[event.currentTarget.name] = event.currentTarget.value;
    this.setState({patientHistory});
    console.log(this.state);
  };
  render() {
    let patients=this.state.patients;
    let diseases=this.state.diseases;
    let diets=this.state.diets;

    let optionItemsPatient=patients.map((patient) =>
    <option value={patient.patientId}>{patient.patientName}</option>
    );

    let optionItemsDisease=diseases.map((disease) =>
    <option value={disease.desId}>{disease.desName}</option>
    );

    let optionItemsDiet=diets.map((diet) =>
    <option value={diet.dietId}>{diet.dietType}</option>
    );

    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>

        <div className="mb-3">
            <label htmlFor="patientHistoryId" className="form-label">
              Patient History Id
            </label>
            <input
              type="text"
              className="form-control"
              id="patientHistoryId"
              name="patientHistoryId"
              value={this.state.history.patientHistoryId}
              onChange={this.handleChange}/>
          </div>

          <div className="mb-3">
            <label htmlFor="recordedDate" className="form-label">
              Recorded Date
            </label>
            <input
              type="date"
              className="form-control"
              id="recordedDate"
              name="recordedDate"
              value={this.state.history.recordedDate}
              onChange={this.handleChange}
              autoFocus
            />
          </div>

           <div className="mb-3">
            <label htmlFor="patientId" className="form-label">
              Patient Name
            </label>
            <select id="patientId" name="patientId" onChange={this.handleChange}>
             <option value="">Select</option>
              {optionItemsPatient}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="desId" className="form-label">
              Disease Name
            </label>
            <select id="desId" name="desId" onChange={this.handleChange} >
            <option value="">Select</option>
              {optionItemsDisease}

            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="dietId" className="form-label">
              Diet Type 
            </label>
            <select id="dietId" name="dietId" onChange={this.handleChange} >
            <option value="">Select</option>
              {optionItemsDiet}

            </select>
          </div>
          

          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePatientHistory;