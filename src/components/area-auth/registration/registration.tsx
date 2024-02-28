import React, {useEffect, useState} from "react";

import './registration.css';

import {Button, Form, Input} from 'antd';
import {Paths} from "../../../routes/routes.tsx";

import {GooglePlusOutlined} from "@ant-design/icons";
import {UserLoginProps, userRegistration} from "@redux/auth/authActions.ts";
import {loaderSwitch} from "@redux/loaderSlice.ts";
import {authStateClear} from "@redux/auth/authSlice.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {isEmail, isPassword} from "@components/area-auth/auth/auth.tsx";

type FieldType = {
    email?: string;
    password?: string;
    passwordControl?: string;
    remember?: string;
};

export const Registration: React.FC = () => {
    const {loading, error, success} = useAppSelector(
        (state) => state.auth
    )
    const dispatch = useAppDispatch()
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(loaderSwitch(loading))
        if (error !== null) {
            const errorCode = error.data.statusCode
            dispatch(authStateClear())
            if (errorCode === 409) {
                dispatch(authStateClear())
                navigate(Paths.ERROR_USER_EXIST)
            } else {
                dispatch(authStateClear())
                navigate(Paths.SOMETHING_WRONG)
            }
        }
        if (success) {
            dispatch(authStateClear())
            navigate(Paths.RESULT_SUCCESS)
        }
    }, [loading, error])


    const onFinish = (values: object) => {
        dispatch(userRegistration(values as UserLoginProps))
    };

    const onFinishFailed = (errorInfo: object) => {
        console.log('Failed:', errorInfo);
    };

    const [emailInputStatus, setEmailInputStatus] = useState("");
    const [passwordInputStatus, setPasswordInputStatus] = useState("");
    const [password, setPassword] = useState("")
    const [passwordControl, setPasswordControl] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("Введенные пароли не совпадают")

    const validateEmail = (e: any) => {
        const email = e.target.value;

        if (isEmail(email)) {
            setEmailInputStatus("")
        } else if (email === "") {
            setEmailInputStatus("")
        } else {
            setEmailInputStatus("error")
        }
    };

    const validatePassword = (e: any) => {
        e.preventDefault();

        if (isPassword(e.target.value)) {
            setPasswordInputStatus("")
        } else if (e.target.value === "") {
            setPasswordInputStatus("")
        } else {
            setPasswordInputStatus("error")
        }

        if (e.target.name === "controlPassword") {
            setPasswordControl(e.target.value)
            if (password !== e.target.value) {
                setPasswordInputStatus("error")
                setPasswordMessage("Введенные пароли не совпадают")
            } else {
                setPasswordMessage("Введенные пароли совпадают")
            }
        } else {
            setPassword(e.target.value)
            if (passwordControl !== e.target.value) {
                setPasswordInputStatus("error")
                setPasswordMessage("Введенные пароли не совпадают")
            } else {
                setPasswordMessage("Введенные пароли совпадают")
            }
        }
    };

    return (
        <Form
            name="registrationForm"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
                        data-test-id='registration-email'
                        className="input-default"
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
                style={{marginBottom: '46px', maxWidth: '100%'}}
                rules={[{required: true, message: 'Введите пароль'}]}
            >
                <Form.Item
                    name="password">
                    <Input.Password
                        data-test-id='registration-password'
                        name="password"
                        onChange={(e) => validatePassword(e)}
                        // @ts-ignore
                        status={passwordInputStatus}
                    />
                </Form.Item>
                <p className="password-condition">Пароль не менее 8 символов, с заглавной буквой и
                    цифрой</p>
            </Form.Item>
            <Form.Item<FieldType>
                className="field-group"
                style={{marginBottom: '62px', maxWidth: '100%'}}
                rules={[{required: true, message: 'Введите пароль еще раз'}]}
            >
                <Form.Item
                    name="passwordControl">
                    <Input.Password
                        data-test-id='registration-confirm-password'
                        name="controlPassword"
                        onChange={(e) => validatePassword(e)}
                        // @ts-ignore
                        status={passwordInputStatus}
                    />
                </Form.Item>
                <p className="password-match ">{passwordMessage}</p>
            </Form.Item>

            <Form.Item className="field-group" style={{marginBottom: '0'}}>
                <div className="button-wrapper" data-test-id='registration-submit-button'>
                    <Button className="form-button" type="primary" htmlType="submit">
                        Войти
                    </Button>
                    <Button className="form-button form-button-outline" htmlType="button"
                            onClick={onFinish}>
                        <GooglePlusOutlined/> Регистрация через Google
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
}
