import axios from "axios";

const LOCAL_HOST_URL = "http://localhost:8087/doctors";

class DoctorService{
    async getAllDoctors(){
        return await axios.get(LOCAL_HOST_URL+"/alldoctors");
    }

    async createDoctor(doctor){
        return await axios.post(LOCAL_HOST_URL,doctor);
    } 

    async getDoctorById(id){
        return await axios.get(LOCAL_HOST_URL+"/"+id);
    }

    async updateDoctor(){
        return await axios.put(LOCAL_HOST_URL);
    }
    
    async deleteDoctor(id){
        return await axios.delete(LOCAL_HOST_URL+"/"+id);
    }
}
export default new DoctorService();