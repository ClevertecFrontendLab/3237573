import {FC} from "react";
import {authStateClear} from "@redux/auth/authSlice.ts";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../routes/routes.tsx";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";

interface SiderExitProps {
    className: string,
    isCollapsed: boolean,
}

export const SiderExit: FC<SiderExitProps> = (
    {
        className,
        isCollapsed
    }) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleBtn = () => {
        dispatch(authStateClear())
        navigate(Paths.AUTH)
    }

    return (
        <div className="exit">
            {className === "sider360"
                ? <button className="menu-item" onClick={handleBtn}>
                    <span>Выход</span>
                </button>
                : <button className="menu-item" onClick={handleBtn}>
                    <img src="img/exit.svg" alt="logo exit"/>
                    {isCollapsed ? "" : <span>Выход</span>}
                </button>
            }
        </div>
    );
}
