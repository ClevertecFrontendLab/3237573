import React from "react";
import {CloseCircleFilled} from "@ant-design/icons";
import {Paths} from "../../../../routes/routes.tsx";
import {ErrorTest} from "@components/area-auth/result/error-test";

export const ErrorUserExist: React.FC = () => {

    const errorUserExistData =
        {
            isOpen: true,
            icon: <CloseCircleFilled className="form-icon color-error"/>,
            title: "Данные не сохранились",
            desc: "Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.",
            btnName: "Назад к регистрации ",
            btnHandle: Paths.REGISTRATION,
            dataTestId: ""
        }

    return (
        <ErrorTest {...errorUserExistData} />
    );
};
