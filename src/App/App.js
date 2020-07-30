import React from "react";
import "./app.scss";
import "../Components/styles.scss";
import Header from "../Components/Header/Header"
import Routes from "../Routes";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="app">
                <Header />
                <Routes />
            </div>
        );
    }
}

export default App;
