import React from "react";
import { Route, Switch } from "react-router-dom";
import ChooseAnnouncement from "./Components/Announcements/ChooseAnnouncement";
import AnnouncementCards from "./Components/Announcements/AnnouncementCards";

export default () => (
    <Switch>
        <Route path="/" exact children={<AnnouncementCards />}/>
        <Route path="/:title" exact children={<ChooseAnnouncement />}/>
    </Switch>
);