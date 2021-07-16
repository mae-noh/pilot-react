import axios from 'axios'
import TokenService from '../services/storage.service'

const AxiosService = {

    init(baseURL: string) {
        axios.defaults.baseURL = baseURL;
    },

    setHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource: string) {
        return axios.get(resource)
    },

    post(resource: string, data: any) {
        return axios.post(resource, data)
    },

    delete(resource: string) {
        return axios.delete(resource)
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
     **/
    customRequest(data: any) {
        return axios(data)
    }
}

export default AxiosService