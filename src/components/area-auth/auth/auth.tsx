import React from "react";
import "../auth-area.css";
import './auth.css';
import {Tabs, TabsProps} from "antd";
import {Login, Registration} from "@components/area-auth";
import logo from "../img/logo.svg";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../../routes/routes.tsx";

export const isEmail = (email: any) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const isPassword = (password: any) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(password);


const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Вход',
        children: <Login/>,
    },
    {
        key: '2',
        label: 'Регистрация',
        children: <Registration/>,
    }
];

interface AuthProps {
    defaultKey: string
}

export const Auth: React.FC<AuthProps> = (defaultKey) => {
    const navigate = useNavigate()

    const onChange = (key: string) => {
        key === '1' ? navigate(Paths.AUTH) : navigate(Paths.REGISTRATION)
    };

    return (
        <div className="page-bg">
            <div className="modal">
                <img className="form-logo" src={logo} alt="CleverFit Logo"/>
                <Tabs className="tabs"
                      defaultActiveKey={defaultKey.defaultKey}
                      items={items}
                      onChange={onChange}
                />
            </div>
        </div>
    );
};
