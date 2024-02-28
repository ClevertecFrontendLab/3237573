import React from "react";

import './../registration/registration.css';
import './recover.css';

import {Button, Form, Input, Modal} from 'antd';


export const Recover: React.FC = () => {

    return (
        <div className="page-bg">
            <Modal
                className="modal"
                centered
                open={true}
                closable={false}
                width={539}
                style={{
                    textAlign: 'center',
                }}
                footer={[]}
            >
                <h1 className="form-title form-title-recover">Восстановление аккаунта</h1>
                <Form
                    name="recoverAccount"
                    autoComplete="off"
                >
                    <Form.Item
                        className="field-group"
                        style={{marginBottom: '46px', maxWidth: '100%'}}
                        rules={[{required: true, message: 'Новый пароль'}]}
                    >
                        <Form.Item name="password">
                            <Input.Password/>
                        </Form.Item>
                        <p className="password-condition">Пароль не менее 8 символов, с заглавной
                            буквой и
                            цифрой</p>
                    </Form.Item>
                    <Form.Item
                        className="field-group"
                        style={{marginBottom: '62px', maxWidth: '100%'}}
                        rules={[{required: true, message: 'Повторите пароль'}]}
                    >
                        <Form.Item name="passwordControl">
                            <Input.Password/>
                        </Form.Item>
                        <p className="password-match ">Введенные пароли не совпадают</p>
                    </Form.Item>

                    <Form.Item className="field-group" style={{marginBottom: '0'}}>
                        <div className="button-wrapper">
                            <Button className="form-button" type="primary" htmlType="submit">
                                Сохранить
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
