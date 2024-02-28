import {MainPage} from "@pages/main-page/index.js";
import {Route, Routes} from "react-router-dom";
import {SomethingWrong} from "@components/area-auth/result/smthwrong/somethingWrong.tsx";
import {Code} from "@components/area-auth/result/code/code.tsx";

import {Auth} from "@components/area-auth/auth";
import {ErrorCheckEmailNoExist, ErrorLogin} from "@components/area-auth";
import {ResultSuccess} from "@components/area-auth/result/result-success";
import {ErrorUserExist} from "@components/area-auth/result/error-user-exist";

export enum Paths {
    MAIN = "/main",
    AUTH = "/auth",
    LOGIN = "/auth/login",
    REGISTRATION = "/auth/registration",
    SOMETHING_WRONG = "/something-wrong",
    CODE = "/code",
    RESULT_SUCCESS = "/result/success",
    ERROR_LOGIN = "/result/error-login",
    ERROR_USER_EXIST = "/result/error-user-exist",
    ERROR_CHECK_EMAIL_NO_EXIST = "/result/error-check-email-no-exist"
}

export const routes = (
    <Routes>
        <Route path={Paths.AUTH} element={<Auth defaultKey={"1"}/>}/>
        <Route path={Paths.LOGIN} element={<Auth defaultKey={"1"}/>}/>
        <Route path={Paths.REGISTRATION} element={<Auth defaultKey={"2"}/>}/>
        <Route index={true} element={<MainPage/>}/>
        <Route path={Paths.MAIN} element={<MainPage/>}/>
        <Route path={Paths.RESULT_SUCCESS} element={<ResultSuccess/>}/>
        <Route path={Paths.ERROR_LOGIN} element={<ErrorLogin/>}/>
        <Route path={Paths.ERROR_USER_EXIST} element={<ErrorUserExist/>}/>
        <Route path={Paths.ERROR_CHECK_EMAIL_NO_EXIST} element={<ErrorCheckEmailNoExist/>}/>
        <Route path={Paths.SOMETHING_WRONG} element={<SomethingWrong/>}/>
        <Route path={Paths.CODE} element={<Code email="test@email.com"/>}/>
    </Routes>
)
