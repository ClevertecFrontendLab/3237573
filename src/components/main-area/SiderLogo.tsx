import {FC} from "react";

interface SiderLogoProps {
    className: string,
    isCollapsed: boolean,
}

export const SiderLogo: FC<SiderLogoProps> = (
    {
        className,
        isCollapsed,
    }) => {

    return (
        <div className="logo">
            {className === "sider360"
                ? <img src="/img/logo.svg" alt="Logo" width="72"/>
                : isCollapsed
                    ? <img src="/img/logo-small.svg" alt="Logo"/>
                    : <img src="/img/logo.svg" alt="Logo"/>
            }
        </div>
    );
}
