import axios from "axios";

const PATIENT_API_BASE_URL = "http://localhost:8080/patient";

class PatientService {
  async getAllPatients() {
    return await axios.get(PATIENT_API_BASE_URL);
  }

  async createPatient(patient) {
    return await axios.post(PATIENT_API_BASE_URL + "/add", patient);
  }

  async getPatientById(patientId) {
    return await axios.get(PATIENT_API_BASE_URL + "/id/" + patientId);
  }

  async updatePatient(patientId, patient) {
    return await axios.put(PATIENT_API_BASE_URL + "/" + patientId, patient);
  }

  async deletePatient(patientId) {
    return await axios.delete(PATIENT_API_BASE_URL + "/" + patientId);
  }
}

export default new PatientService();
