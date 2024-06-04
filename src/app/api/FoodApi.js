import axios from "axios";

const foodApi = axios.create({
	baseURL: "https://www.themealdb.com/api/json/v1/1", // Add the protocol (https://)
	headers: {
		"Content-Type": "application/json", // Example headers
	},
});

export default foodApi;
