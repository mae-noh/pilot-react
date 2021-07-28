import axios, {AxiosInstance} from 'axios'
import TokenService from '@/common/storage'

class Axios {

    private readonly instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: process.env.VUE_APP_ROOT_API,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    init(baseURL: string) {
        this.instance.defaults.baseURL = baseURL;
    }

    setHeader() {
        this.instance.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
    }

    removeHeader() {
        this.instance.defaults.headers.common = {}
    }

    get(resource: string) {
        return this.instance.get(resource)
    }

    post(resource: string, data: any) {
        return this.instance.post(resource, data)
    }

    delete(resource: string) {
        return this.instance.delete(resource)
    }

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
        return this.instance(data)
    }
}

export default Axios