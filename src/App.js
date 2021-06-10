import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav";
import Diet from "./components/diet";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import AddDiet from "./components/addDiet";
import PageNotFound from "./components/pageNotFound";
import DietDetails from "./components/dietdetails";
import Doctors from "./components/doctors";
import AddDoctor from "./components/addDoctor";
import DoctorDetails from "./components/doctorDetails";
import PatientCase from "./components/patientCase";
import AddPatientCase from "./components/addPatientCase";
import PatientCaseDetails from "./components/patientCaseDetails";
import Finance from "./components/finance";
import AddFinance from "./components/addFinance";
import FinanceDetails from "./components/financeDetails";
import Patients from "./components/patients";
import AddPatient from "./components/addPatient";
import PatientDetails from "./components/patientDetails";
import Diseases from "./components/diseases";
import AddDisease from "./components/addDisease";
import DiseaseDetails from "./components/diseaseDetails";
import Policies from "./components/policies";
import AddPolicy from "./components/addPolicy";
import PolicyDetails from "./components/policyDetails";
import PatientHistory from './components/patientHistory';
import CreatePatientHistory from './components/createPatientHistory';
import HistoryDetails from './components/historyDetails';

function App() {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/diet/add" component={AddDiet} />
          <Route path="/diet/update/:id" component={DietDetails} />
          <Route path="/diet/view/:id" component={DietDetails} />
          <Route path="/diet" component={Diet} />
          <Route exact path="/doctor/add" component={AddDoctor} />
          <Route exact path="/doctor/get/:id" component={DoctorDetails} />
          <Route exact path="/doctor/update" component={DoctorDetails} />
          <Route exact path="/doctors" component={Doctors} />
          <Route path="/patientCase/add" component={AddPatientCase} />
          <Route path="/patientCase/view/:id" component={PatientCaseDetails} />
          <Route
            path="/patientCase/update/:id"
            component={PatientCaseDetails}
          />
          <Route path="/patientCase" component={PatientCase} />
          <Route path="/finance/addFinance" component={AddFinance} />
          <Route path="/finance/get/:financeId" component={FinanceDetails} />
          <Route
            path="/finance/updateFinance/:financeId"
            component={FinanceDetails}
          />
          <Route path="/finance" component={Finance} />
          <Route path="/patients/add" component={AddPatient} />
          <Route path="/patients/get/:id" component={PatientDetails} />
          <Route path="/patients/update/:id" component={PatientDetails} />
          <Route path="/patients" component={Patients} />
          <Route path="/diseases/add" component={AddDisease} />
          <Route path="/diseases/get/:id" component={DiseaseDetails} />
          <Route path="/diseases/update/:id" component={DiseaseDetails} />
          <Route path="/diseases" component={Diseases} />
          <Route path="/policies/add" component={AddPolicy} />
          <Route path="/policies/get/:id" component={PolicyDetails} />
          <Route path="/policies/update/:id" component={PolicyDetails} />
          <Route path="/policies" component={Policies} />
          <Route path="/history/add" component={CreatePatientHistory} />
          <Route path="/history/get/:id" component={HistoryDetails} />
           <Route path="/history/:id" component={HistoryDetails} />
           <Route path="/history" component={PatientHistory} />
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
          <Redirect from="/home" to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
