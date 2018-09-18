import axios from 'axios';

export class ExposureApi {
    constructor() {
        this.api = process.env.REACT_APP_API;
    }
    getExposures({ page, pageSize, ordering, filters = [] }){
        return axios.get(`${this.api}/api/exposure`)
    }
}