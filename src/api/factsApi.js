import axiosClient from "./axiosClient.js";

const factsApi = {
    getAll(){
        const url = '/facts';
        return axiosClient.get(url);
    },
}

export default factsApi;