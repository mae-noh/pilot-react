const TOKEN_KEY = 'accessToken'

const Storage = {

    getToken() {
        return sessionStorage.getItem(TOKEN_KEY)
    },

    saveToken(accessToken : string) {
        sessionStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        sessionStorage.removeItem(TOKEN_KEY)
    }

}

export default Storage