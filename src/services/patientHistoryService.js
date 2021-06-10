import axios from "axios";

const HISTORY_API_BASE_URL = "http://localhost:8080/history";

class PatientHistoryService {
    async getAllPatientHistory(){
        return await axios.get(HISTORY_API_BASE_URL + "/all");
    }

    async addPatientHistory(patientHistory) {
        return await axios.post(HISTORY_API_BASE_URL + "/add", patientHistory);
      }
    
      async findByPatientHistoryId(patientHistoryId) {
        return await axios.get(HISTORY_API_BASE_URL + "/" + patientHistoryId);
      }
    
      async updatePatientHistory(patientHistoryId, patientHistory) {
        return await axios.put(HISTORY_API_BASE_URL + "/" + patientHistoryId, patientHistory);
      }
    
      async deletePatientHistory(patientHistoryId) {
        return await axios.delete(HISTORY_API_BASE_URL + "/" + patientHistoryId);
      }

}
export default new PatientHistoryService();