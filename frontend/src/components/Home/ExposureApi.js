import axios from 'axios';

export class ExposureApi {
    constructor() {
        this.api = process.env.REACT_APP_API;
    }
    getExposures({ page, pageSize, ordering, filters = [] }){

        const params = { page: page, pageSize: pageSize, ordering: ordering };

        filters.forEach(element => {
            params[element.property] = element.value;
          });

        return axios.get(`${this.api}exposure`, {
            params: params,
          })
    }

    getCCDsByExposure({ page, pageSize, ordering, filters = [] }){

        const params = { page: page, pageSize: pageSize, ordering: ordering };

        filters.forEach(element => {
            params[element.property] = element.value;
          });

        console.log(params)

        return axios.get(`${this.api}ccd`, {
            params: params,
          })
    }

}