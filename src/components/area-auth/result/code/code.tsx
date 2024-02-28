import React from "react";
import "./code.css";
import {Input, Modal} from "antd";
import {ExclamationCircleFilled} from "@ant-design/icons";

interface CodeProps {
    email: string
}

export const Code: React.FC<CodeProps> = ({email}) => {
    return (
        <div className="page-bg">
            <Modal
                className="modal modal-code"
                centered
                open={true}
                closable={false}
                width={539}
                style={{
                    textAlign: 'center',
                }}
                footer={[]}
            >
                <ExclamationCircleFilled className="form-icon color-attention"/>
                <h1 className="form-title">Введите код<br/>для восстановления аккауанта</h1>
                <p className="form-desc">Мы отправили вам на e-mail <span>{email}</span><br/>шестизначный
                    код. Введите его в&nbsp;поле ниже.</p>
                <ul className="code-wrapper">
                    <li><Input className="code-item"/></li>
                    <li><Input className="code-item"/></li>
                    <li><Input className="code-item"/></li>
                    <li><Input className="code-item"/></li>
                    <li><Input className="code-item"/></li>
                    <li><Input className="code-item"/></li>
                </ul>
                <p className="form-desc hint">Не пришло письмо? Проверьте папку Спам.</p>
            </Modal>
        </div>
    );
};
