import {FC} from "react";
import {Layout, Menu} from 'antd';
import {SiderSwitch} from "@components/main-area/SiderSwitch.tsx";
import {SiderLogo} from "@components/main-area/SiderLogo.tsx";
import {SiderExit} from "@components/main-area/SiderExit.tsx";

const {
    Sider
} = Layout;

interface SiderPanelProps {
    className: string,
    width: number,
    collapsedWidth: number,
    isCollapsed: boolean,
    style: object,
    handleCollapse: any,
    menuItems: any
}

export const SiderPanel: FC<SiderPanelProps> = (
    {
        className, width, collapsedWidth, isCollapsed, style,
        handleCollapse, menuItems
    }) => {

    return (
        <Sider className={className}
               width={width}
               collapsedWidth={collapsedWidth}
               trigger={null}
               collapsible
               collapsed={isCollapsed}
               style={style}
        >
            <div className="menu-and-logo">
                <SiderLogo
                    className={className}
                    isCollapsed={isCollapsed}
                />
                <Menu
                    className="menu"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={menuItems}
                />
            </div>
            <SiderExit
                className={className}
                isCollapsed={isCollapsed}
            />
            <SiderSwitch
                className={className}
                collapsed={isCollapsed}
                handleCollapse={handleCollapse}
            />
        </Sider>
    );
}
