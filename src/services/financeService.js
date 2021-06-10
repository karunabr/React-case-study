import axios from "axios";

const FINANCE_API_BASE_URL = "http://localhost:8081/finance";
class FinanceService {
  async findAllFinanceDetails() {
    return await axios.get(FINANCE_API_BASE_URL);
  }
  async createFinance(finance) {
    return await axios.post(FINANCE_API_BASE_URL, finance);
  }

  async findByFinanceId(financeId) {
    return await axios.get(FINANCE_API_BASE_URL + "/" + financeId);
  }

  async updateFinance(financeId, finance) {
    return await axios.put(FINANCE_API_BASE_URL + "/" + financeId, finance);
  }

  async deleteFinance(financeId) {
    return await axios.delete(FINANCE_API_BASE_URL + "/" + financeId);
  }
}
export default new FinanceService();
