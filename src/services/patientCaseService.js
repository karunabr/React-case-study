import axios from "axios"
const PATIENTCASE_API_BASE_URL = "http://localhost:8081/patientCase";
class PatientCaseService{
    async showAllPatientCase(){
 
 //return await axios.get(PATIENTCASE_API_BASE_URL + "/all");           
 return await axios.get(PATIENTCASE_API_BASE_URL);       
    }

    async addPatientCase(patientCase){
        //return await axios.get(PATIENTCASE_API_BASE_URL + "/add", patientCase);
        return await axios.post(PATIENTCASE_API_BASE_URL, patientCase);
    }

    async getPatientCaseById(patientCaseId){
        return await axios.get(PATIENTCASE_API_BASE_URL + "/"+patientCaseId);
    }

    async updatePatientCase(patientCaseId,patientCase){
    return await axios.put(PATIENTCASE_API_BASE_URL + "/"+patientCaseId,patientCase);
    }

     async deletePatientCase(patientCaseId){
    return await axios.delete(PATIENTCASE_API_BASE_URL + "/"+patientCaseId);
     }




}
export default new PatientCaseService();