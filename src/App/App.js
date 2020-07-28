import React from "react";
import "./app.scss";
import "../Components/styles.scss";
import AddAnnouncement  from "../Components/AddAnnouncementForm/AddAnnouncement";
import AnnouncementCards from "../Components/Announcements/AnnouncementCards";
import Routes from "../Routes";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="app">
                <AddAnnouncement  />
                <Routes />
            </div>
        );
    }
}

export default App;
