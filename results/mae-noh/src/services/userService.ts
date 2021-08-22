import Auth from '@/models/Auth'
import HttpClient from '@/common/httpClient'
import Storage from '@/common/storage'
import HTTPError from "@/common/httpError";

const httpClient = new HttpClient();

class UserService {
    /**
     * 1. 요청 값 : auth(account,password)
     * 2. 요청 주소 : '/auth/login'
     * 3. HTTP Method : POST
     * 성공 시?
     * 4. LocalStorage에 accessToken 값을 저장한다.
     * 5. HTTP header에 Authorization Bearer Token을 저장한다.
     * 6. TODO : 반환 값 - accessToken?
     * 실패 시?
     * TODO : 실패 시 에러 처리

     * */
    async login(auth : Auth){
        try {
            const res = await httpClient.post('/auth/login', auth)
            // console.log('response data', res.data.accessToken)
            return res.data.accessToken;
        } catch (error) {
            throw new HTTPError(error.response.status, error.response.data.message)
        }
    }

    /**
     * 1. 요청 주소 : '/v1/users/me'
     * 2. HTTP Method : GET
     * 3. 성공 시 응답 결과 : User 회원 정보
     *    TODO : 실패 시 에러 처리
     * 4. 반환 값 : User 회원 정보
     *    TODO : User 객체에 담을지? result를 보낼지?
     * */
    async getUserInfo(accessToken : string){
        try{
            await httpClient.setHeader(accessToken)
            const res = await httpClient.get('/v1/users/me')
            return res;
        } catch (error){
            new HTTPError(error.response.status, error.response.data.message)
        }
    }

    /**
     * 1. accessToken이 있는 경우
     * 1-1. sessionStorage에서 토큰을 삭제
     *
     * 2. accessToken이 없는 경우..? 도 생각해야하나?
     * 2-1. TODO: 페이지 이동?
     *
     * 3. TODO: 에러 발생 상황 언제?
     * */
    async logout() {
        try{
            const token = await Storage.getToken()
            if(token) Storage.removeToken()
            // console.log('logout token expected null-> ', Storage.getToken())
        } catch (error){
            console.log(error)
        }
    }
}

export default UserService