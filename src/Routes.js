import React from "react";
import { Route, Switch } from "react-router-dom";
import ChooseAnnouncement from "./Components/Announcements/ChooseAnnouncement";
import AnnouncementCards from "./Components/Announcements/AnnouncementCards";
import SearchResult from "./Components/Search/SearchResult";
import AnnouncementList from "./Components/Announcements/AnnouncementList";

export default () => (
    <Switch>
        <Route path="/" exact children={<AnnouncementList />}/>
        <Route path="/searchResults" exact children={<SearchResult />}/>
        <Route path="/:title" exact children={<ChooseAnnouncement />}/>
    </Switch>
);