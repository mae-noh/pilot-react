import Auth from '@/models/Auth'
import Axios from '@/apis/axios'
import Storage from '@/common/storage'

const axios = new Axios();

const UserService = {

    /**
     * 1. 요청 값 : auth(account,password)
     * 2. 요청 주소 : '/auth/login'
     * 3. HTTP Method : POST
     * 4. 성공 시 응답 결과 : accessToken
     *    TODO : 실패 시 에러 처리
     * 5. LocalStorage에 accessToken 값을 저장한다.
     * 6. TODO : 반환 값 : accessToken? 성공여부?
    * */

    login: async function(auth : Auth) {
        try {
            const res = await axios.post('/auth/login', auth)
            console.log('response data', res.data.accessToken)
            Storage.saveToken(res.data.accessToken)
            console.log('save token', Storage.getToken())
            return res.data.accessToken
        } catch (error) {
            console.log(error)
        }
    },

    /**
     * 1. 요청 주소 : '/v1/users/me'
     * 2. HTTP Method : GET
     * 3. HTTP header : Authorization Bearer Token
     * 4. 성공 시 응답 결과 : User 회원 정보
     *    TODO : 실패 시 에러 처리
     * 5. 반환 값 : User 회원 정보
     * */
    getUserInfo: async function() {
        try{
            axios.setHeader()
            const res = await axios.get('/v1/users/me')
            return res.data;
        } catch (error){
            console.log(error)
        }
    },

    /**
     * 1. accessToken이 있는 경우
     * 2. sessionStorage에서 토큰을 삭제
     * */
    logout: async function() {
        try{
            const token = await Storage.getToken()
            console.log(token)
            if(token) Storage.removeToken()
            console.log('logout token expected null->', Storage.getToken())
        } catch (error){
            console.log(error)
        }
    }
}

export default UserService