import  axios from "axios"
const DIET_API_BASE_URL = "http://localhost:8080/diet";
class DietService{
    async showAllDiet() {

//return await axios.get(DIET_API_BASE_URL + "/all");
return await axios.get(DIET_API_BASE_URL );


    }

    async addDiet(diet) {
        //return await axios.post(DIET_API_BASE_URL + "/add", diet);
        return await axios.post(DIET_API_BASE_URL, diet);
      }
    
      async viewDiet(dietId) {
          return await axios.get(DIET_API_BASE_URL + "/"  + dietId);
      }
    
      async updateDiet(dietId, diet){
          return await axios.put(DIET_API_BASE_URL + "/" + dietId, diet);
      }
    
      async deleteDiet(dietId) {
          return await axios.delete(DIET_API_BASE_URL + "/" + dietId);
      }
    }
    

export default new DietService();