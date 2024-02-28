import {Provider} from 'react-redux';
import {HistoryRouter} from "redux-first-history/rr6";
import {history, store} from '@redux/configure-store';
import {routes} from "./routes";
import {Loader} from "@components/loader";


export const App = () => (
    <Provider store={store}>
        <HistoryRouter history={history}>{routes}</HistoryRouter>
        <Loader/>
    </Provider>
);
