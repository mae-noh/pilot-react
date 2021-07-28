const TOKEN_KEY = 'accessToken'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instance.
 **/
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