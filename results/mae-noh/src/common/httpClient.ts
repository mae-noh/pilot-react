import axios, {AxiosInstance} from 'axios'
import Storage from '@/common/storage'

class HttpClient{

    private readonly request: AxiosInstance;

    constructor() {
        this.request = axios.create({
            baseURL: process.env.VUE_APP_ROOT_API,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    init(baseURL: string) {
        this.request.defaults.baseURL = baseURL;
    }

    setHeader(token : string) {
        this.request.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }

    removeHeader() {
        this.request.defaults.headers.common = {}
    }

    get(resource: string) {
        return this.request.get(resource)
    }

    post(resource: string, data: any) {
        return this.request.post(resource, data)
    }

    delete(resource: string) {
        return this.request.delete(resource)
    }

    /**
     * Perform a custom HttpClient request.
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
        return this.request(data)
    }
}

export default HttpClient;