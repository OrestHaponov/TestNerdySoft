import React from "react";
import "./app.scss";
import "../Components/styles.scss";
import AddAnnouncement  from "../Components/AddAnnouncementForm/AddAnnouncement";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="app">
                <AddAnnouncement  />
            </div>
        );
    }
}

export default App;
