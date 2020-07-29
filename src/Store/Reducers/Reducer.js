import {combineReducers} from "redux";
import Announcements from "./Announcements";
import AddAnnouncement from "./AddAnnouncement";
import AnnouncementActions from "./AnnouncementActions";
import Search from "./Search";

export default combineReducers({
    Announcements,AddAnnouncement,AnnouncementActions,Search
})