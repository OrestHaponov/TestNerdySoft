import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.js";
import './index.scss';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./Store/store.js";
import {PersistGate} from "redux-persist/integration/react";


    
const app =(
    <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
            <HashRouter>
                <App />
            </HashRouter>
        </PersistGate>
    </Provider>
)

ReactDOM.render(app, document.getElementById("root"));