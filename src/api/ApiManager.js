import axios from "axios";

export default class ApiManager {
    axiosClient = axios.create();
    apiKey = process.env.REACT_APP_API_KEY;
    host = process.env.REACT_APP_API_HOST;

    async init() {

        //const bearerToken = process.eng.REACT_APP_BEARER_TOKEN;

        this.axiosClient.defaults.headers = {
            'X-RapidAPI-Key': `${this.apiKey}`,
            'X-RapidAPI-Host': `${this.host}`,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        };
        this.axiosClient.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    }

    get = async (url) => {
        await this.init();
        return this.axiosClient.get(`${url}`).then(response => response);
    }

    post = async (url, payload) => {
        await this.init();
        return this.axiosClient.post(`${url}`, payload).then(response => response);
    }
}