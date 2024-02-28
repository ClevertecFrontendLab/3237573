import React from "react";
import "./somethingWrong.css";
import image from "@components/area-auth/img/smthwrong.svg";
import {Button, Modal} from "antd";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../../../routes/routes.tsx";

export const SomethingWrong: React.FC = () => {
    const navigate = useNavigate()

    const handleButton = () => {
        navigate(Paths.REGISTRATION)
    }

    return (
        <div className="page-bg">
            <Modal
                className="modal modal-smth"
                centered
                open={true}
                closable={false}
                width={539}
                style={{
                    textAlign: 'center',
                }}
                footer={[]}
            >
                <img src={image} alt=""/>
                <h1 className="form-title">Что-то пошло не так</h1>
                <p className="form-desc">Произошла ошибка, попробуйте отправить форму ещё раз.</p>
                <Button
                    className="form-button form-button-smth"
                    onClick={handleButton}
                >
                    Назад
                </Button>
            </Modal>
        </div>
    );
};
