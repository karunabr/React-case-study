import axios from "axios";

const DISEASE_API_BASE_URL = "http://localhost:8080";

class DiseaseService {
  async getAllDiseases() {
    //return await axios.get(DISEASE_API_BASE_URL + "/all");
    return await axios.get(DISEASE_API_BASE_URL+"/disease");
  }

  async createDisease(disease) {
    //return await axios.post(DISEASE_API_BASE_URL + "/add", disease);
    return await axios.post(DISEASE_API_BASE_URL+"/disease",disease);
  }

  async getDiseaseById(diseaseId) {
    return await axios.get(DISEASE_API_BASE_URL + "/disease/" + diseaseId);
  }

  async updateDisease(disease) {
    return await axios.put(DISEASE_API_BASE_URL+"/disease",disease);
    //http://localhost:8087/disease
  }

  async deleteDisease(diseaseId) {
    return await axios.delete(DISEASE_API_BASE_URL + "/disease/" + diseaseId);
  }
}

export default new DiseaseService();
