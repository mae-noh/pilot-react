import AxiosService from './axios.service'
import TokenService from './storage.service'


class AuthenticationError extends Error {
    constructor(errorCode: number, message: string) {
        super(message)
        this.name = this.constructor.name
        this.message = message
        // this.errorCode = errorCode
    }
}

const UserService = {
    /**
     * Login the user and store the access token to TokenService.
     *
     * @returns access_token
     * @throws AuthenticationError
     **/
    login: async function(account: string, password: string) {
        const requestData = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            url: "http://localhost:5000/auth/login",
            data: {
                account: account,
                password: password
            },
            auth: {
                account: process.env.VUE_APP_CLIENT_ID,
                password: process.env.VUE_APP_CLIENT_SECRET
            }
        }

        console.log('req data' , requestData.data)

        try {
            const response = await AxiosService.customRequest(requestData)

            console.log('res data', response.data)
            TokenService.saveToken(response.data.accessToken)
            AxiosService.setHeader()

            // NOTE: We haven't covered this yet in our AxiosService
            //       but don't worry about this just yet - I'll come back to it later
            // AxiosService.mount401Interceptor();

            return response.data.access_token
        } catch (error) {
            throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    }
}

export default UserService
export { UserService, AuthenticationError }