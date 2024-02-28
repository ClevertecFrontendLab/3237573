import React, {useState} from "react";
import './error-test.css'
import {Button, Modal} from "antd";
import {useNavigate} from "react-router-dom";

type ErrorTestProps = {
    isOpen: boolean,
    icon: any,
    title: string,
    desc: string,
    btnName: string,
    btnHandle: string,
    dataTestId: string
}

export const ErrorTest: React.FC<ErrorTestProps> = (
    {isOpen, icon, title, desc, btnName,
        btnHandle, dataTestId}) => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(isOpen);

    const handleOnClick = () => {
        setOpen(false);
        navigate(btnHandle)
    };

    return (
        <div className="page-bg">
            <Modal
                className="modal"
                centered
                open={open}
                closable={false}
                width={539}
                style={{
                    textAlign: 'center',
                }}
                footer={[]}
            >
                {icon}
                <h1 className="form-title">{title}</h1>
                <p className="form-desc">{desc}</p>
                <Button className="form-button" data-test-id={dataTestId}
                        key="back" onClick={handleOnClick}>
                    {btnName}
                </Button>
            </Modal>
        </div>
    );
};
