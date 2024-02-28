import React from "react";
import {WarningFilled} from "@ant-design/icons";
import {Paths} from "../../../../routes/routes.tsx";
import {ErrorTest} from "@components/area-auth/result/error-test";

export const ErrorLogin: React.FC = () => {

    const errorLoginData =
        {
            isOpen: true,
            icon: <WarningFilled className="form-icon color-warning"/>,
            title: "Вход не выполнен",
            desc: "Что-то пошло не так. Попробуйте еще раз.",
            btnName: "Повторить",
            btnHandle: Paths.LOGIN,
            dataTestId: "login-retry-button"
        }

    return (
        <ErrorTest {...errorLoginData} />
    );
};
