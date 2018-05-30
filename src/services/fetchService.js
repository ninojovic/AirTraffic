import axios from 'axios-jsonp-pro'

import { BASE_URL } from "../shared/constants"

export default class fetchService {
    static getRequest = (lat, lon) => {
        const range = 200;
        const query = `?lat=${lat}&lng=${lon}&fDstL=0&fDstU=${range}`;

        return axios.jsonp(BASE_URL + query)
                    .then(response => response.acList)
    }
}