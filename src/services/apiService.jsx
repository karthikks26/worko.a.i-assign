import axios from "axios";

const apiService = {
  getReferrals: async () => {
    const response = await axios.get(
      "https://run.mocky.io/v3/6bc9538d-77f7-4c56-a150-d4e269b6d338"
    );
    return response.data;
  },
  getServices: async () => {
    const response = await axios.get(
      "https://run.mocky.io/v3/eb718e4e-992d-415d-9465-1312408b6820"
    );
    return response.data;
  },
};

export default apiService;
