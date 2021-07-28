import Auth from '@/models/Auth'
import Axios from '@/common/axios'
import SessionStorage from '@/common/storage'

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
            SessionStorage.saveToken(res.data.accessToken)
            console.log('save token', SessionStorage.getToken())
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
    }
}

export default UserService