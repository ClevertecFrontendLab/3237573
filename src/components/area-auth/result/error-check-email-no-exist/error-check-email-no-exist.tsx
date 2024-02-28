import React from "react";
import {WarningFilled} from "@ant-design/icons";
import {Paths} from "../../../../routes/routes.tsx";
import {ErrorTest} from "@components/area-auth/result/error-test";

export const ErrorCheckEmailNoExist: React.FC = () => {

    const errorData =
        {
            isOpen: true,
            icon: <WarningFilled className="form-icon color-warning"/>,
            title: "Такой e-mail не зарегистрирован",
            desc: "Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.",
            btnName: "Попробовать снова",
            btnHandle: Paths.LOGIN,
            dataTestId: "login-retry-button"
        }

    return (
        <ErrorTest {...errorData} />
    );
};
