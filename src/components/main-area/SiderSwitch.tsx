import {FC} from "react";
import {Button} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

interface SiderSwitchProps {
    className: string,
    collapsed: boolean,
    handleCollapse: any
}

export const SiderSwitch: FC<SiderSwitchProps> = (
    {
        className,
        collapsed,
        handleCollapse
    }) => {

    let mode = "sider-switch-mobile"
    if (className === "sider") {
        mode = "sider-switch"
    }

    return (
        <div className={mode} data-test-id={mode}>
            <Button type="text"
                    icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                    onClick={handleCollapse}
                    style={{
                        fontSize: '12px',
                        width: 20,
                        height: 66,
                        outline: 'none',
                        background: 'var(--character-light-primary-inverse)',
                    }}
            />
        </div>
    )
}
