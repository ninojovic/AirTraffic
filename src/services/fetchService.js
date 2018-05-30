import axios from 'axios-jsonp-pro'

import { BASE_URL } from "../shared/constants"

export default class fetchService {
    static getFlightList = (lat, lon) => {
        const range = 150;
        const query = `?lat=${lat}&lng=${lon}&fDstL=0&fDstU=${range}`;

        return axios.jsonp(BASE_URL + query)
            .then(response => response.acList)
    }

    static getFlightInfo = (flightNumber) => {
        const query = `?fCallQ=${flightNumber}`;

        return axios.jsonp(BASE_URL + query)
            .then(response => response.acList[0]);
    }
}