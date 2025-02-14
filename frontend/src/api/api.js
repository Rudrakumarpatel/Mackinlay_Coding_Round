import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchProducts = async (query, category) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`, {
            params: { query, category }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
