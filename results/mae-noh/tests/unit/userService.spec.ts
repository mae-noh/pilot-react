import UserService from "@/services/userService";
import Auth from "@/models/Auth";
import User from "@/models/User";


test("로그인 성공 시 응답값:200, 데이터:accessToken 리턴", async () => {
    // given
    const userService = new UserService();
    const auth = new Auth("devbadak", "1234");

    // when
    const result = await userService.login(auth)

    // then
    expect(result).toEqual(true);
});

test("로그인 실패 시 error 리턴", () => {
    // given
    const userService = new UserService();
    const auth = new Auth("devbadakfail", "5678");

    // when
    // then
    expect(userService.login(auth)).rejects.toThrow();

});

test("토큰이 있는 경우 사용자 정보를 가져온다.", async () => {
    // given
    const userInfo = {
        "id": 1,
        "account": "foo",
        "name": "반려생활",
        "level": 1
    }
    const token = "token";
    const userService = new UserService();

    // when
    const user = await userService.getUserInfo(token);

    // then
    user? expect(user).toEqual(new User(
            userInfo.id,
            userInfo.account,
            userInfo.name,
            userInfo.level
    )) : undefined;
})