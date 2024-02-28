import React, {useEffect, useState} from "react";
import './login.css';
import {Button, Checkbox, Form, Input} from 'antd';
import {push} from "redux-first-history";

import {GooglePlusOutlined} from "@ant-design/icons";
import {Paths} from "../../../routes/routes.tsx";
import {loaderSwitch} from "@redux/loaderSlice.ts";
import {emailCheck, userLogin, UserLoginProps} from "@redux/auth/authActions.ts";
import {authStateClear, loginRememberSwitch} from "@redux/auth/authSlice.ts";
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {isEmail, isPassword} from "@components/area-auth/auth/auth.tsx";

type FieldType = {
    email: string;
    password: string;
    passwordControl: string
    remember?: string;
};

export const Login: React.FC = () => {
    const {loading, error, success, loginRemember} = useAppSelector(
        (state) => state.auth)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(loaderSwitch(loading))
        if (error !== null) {
            const errorCode = error.data.statusCode
            dispatch(authStateClear())
            if (errorCode === 404) {
                dispatch(push(Paths.ERROR_USER_EXIST))
            } else {
                dispatch(authStateClear())
                dispatch(push(Paths.SOMETHING_WRONG))
            }
            dispatch(authStateClear())
            dispatch(push(Paths.ERROR_LOGIN))
        }
        if (success) {
            dispatch(push(Paths.MAIN))
        }
    }, [loading, error])


    const onBtnGoogle = () => {
        console.log('onBtnGoogle');
    };

    const [emailInputStatus, setEmailInputStatus] = useState("");
    const [passwordInputStatus, setPasswordInputStatus] = useState("");
    const [forgetPassword, setForgetPassword] = useState(true)

    const validateEmail = (e: any) => {
        const email = e.target.value;

        if (isEmail(email)) {
            setEmailInputStatus("")
            setForgetPassword(false)
        } else if (email === "") {
            setEmailInputStatus("")
            setForgetPassword(true)
        } else {
            setEmailInputStatus("error")
            setForgetPassword(true)
        }
    };

    const validatePassword = (e: any) => {
        const password = e.target.value;
        if (isPassword(password)) {
            setPasswordInputStatus("")
        } else if (password === "") {
            setPasswordInputStatus("")
        } else {
            setPasswordInputStatus("error")
        }
    };

    const onFinish = (values: object) => {
        if (emailInputStatus === "" && passwordInputStatus === "") {
            dispatch(userLogin(values as UserLoginProps))
        }
    };

    const onForgetPassword = (values: object) => {
        dispatch(emailCheck(values as UserLoginProps))
        if (success) {
            dispatch(push(Paths.CODE))
        }
    };

    const handleCheckBoxLoginRemember = () => {
        dispatch(loginRememberSwitch())
    }

    return (
        <Form
            name="loginForm"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                className="field-group"
                style={{marginTop: '8px'}}
                rules={[{
                    required: true,
                    message: 'Введите адрес электронной почты'
                }]}
            >
                <Form.Item
                    name="email">
                    <Input
                        className="input-default"
                        data-test-id='login-email'
                        onChange={(e) => validateEmail(e)}
                        // @ts-ignore
                        status={emailInputStatus}
                        addonBefore="e-mail:"
                        allowClear
                        style={{width: '100%'}}
                    />
                </Form.Item>
            </Form.Item>

            <Form.Item<FieldType>
                className="field-group"
                style={{marginBottom: '54px', maxWidth: '100%'}}
                rules={[{required: true, message: 'Введите пароль'}]}
            >
                <Form.Item name="password">
                    <span data-test-id="login-password">
                    <Input.Password
                        onChange={(e) => validatePassword(e)}
                        // @ts-ignore
                        status={passwordInputStatus}
                    />
                    </span>
                </Form.Item>
            </Form.Item>

            <Form.Item<FieldType> className="field-group"
                                  name="remember"
                                  valuePropName="checked"
            >
                <div className="check-wrapper">
                    <Checkbox
                        // @ts-ignore
                        name = {loginRemember}
                        data-test-id='login-remember'
                        className="remember-me"
                        onChange={handleCheckBoxLoginRemember}
                    >Запомнить меня
                    </Checkbox>
                    <Button
                        data-test-id='login-forgot-button'
                        className="forget-password"
                        type="link"
                        htmlType="button"
                        disabled={forgetPassword}
                        onClick={onForgetPassword}>
                        Забыли пароль?
                    </Button>
                </div>
            </Form.Item>

            <Form.Item className="field-group" style={{marginBottom: '0'}}>
                <div className="button-wrapper">
                    <Button
                        data-test-id='login-submit-button'
                        className="form-button"
                        type="primary"
                        htmlType="submit">
                        Войти
                    </Button>
                    <Button className="form-button form-button-outline mb110"
                            htmlType="button"
                            onClick={onBtnGoogle}>
                        <GooglePlusOutlined/> Войти через Google
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
};
