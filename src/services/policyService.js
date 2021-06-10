import axios from "axios";

const POLICY_API_BASE_URL = "http://localhost:8087/policy-service";

class PolicyService {
  async getAllPolicies() {
    return await axios.get(POLICY_API_BASE_URL + "/policy");
  }
  async createPolicy(policy) {
    //return await axios.post(POLICY_API_BASE_URL + "/add", policy);
    return await axios.post(POLICY_API_BASE_URL + "/policy", policy);
  }

  async getByPolicyId(policyId) {
    return await axios.get(POLICY_API_BASE_URL + "/policy/" + policyId);
  }

  async updatePolicy(policy, policyId) {
    return await axios.put(POLICY_API_BASE_URL + "/policy/" + policyId, policy);
  }

  async deletePolicy(policyId) {
    return await axios.delete(POLICY_API_BASE_URL + "/policy/" + policyId);
  }
}

export default new PolicyService();
