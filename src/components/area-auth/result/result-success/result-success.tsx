import React from "react";
import {CheckCircleFilled} from "@ant-design/icons";
import {Paths} from "../../../../routes/routes.tsx";
import {ErrorTest} from "@components/area-auth/result/error-test";

export const ResultSuccess: React.FC = () => {

    const resultSuccessData =
        {
            isOpen: true,
            icon: <CheckCircleFilled className="form-icon color-success"/>,
            title: "Регистрация успешна",
            desc: "Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.",
            btnName: "Войти",
            btnHandle: Paths.AUTH,
            dataTestId: 'registration-enter-button'
        }

    return (
        <ErrorTest {...resultSuccessData} />
    );
};
