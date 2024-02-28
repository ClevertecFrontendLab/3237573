import {FC} from "react";
import './loader.css';
import {Spin} from "antd";
import {loaderSwitch} from "@redux/loaderSlice";
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";


export const Loader: FC = () => {
    const dispatch = useAppDispatch();
    const {isOpen} = useAppSelector(state => state.loader)

    const handleOnClick = () => {
        dispatch(loaderSwitch(false))
    };

    return isOpen && (
        <div
            className="loader_bgn"
            data-test-id='loader'
            onClick={handleOnClick}
        >
            <Spin
                className="loader_bg"
                fullscreen={true}/>
        </div>
    );
}
