import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import {deleteAnnouncement} from "../../Store/Action/AnnouncementActions";

export default function AnnouncementCard(props){
    const dispatch = useDispatch();
    const deleteAnnouncementH = (announcement,announcements) => dispatch(deleteAnnouncement(announcement,announcements));
    const announcementsH = useSelector(state => state.Announcements.announcements);
    return(
        <React.Fragment>
            {props.announcements.map((announcement,index)=>{
                return(
                    <div className="announcement-card" key={index}>
                        <span onClick={()=>deleteAnnouncementH(announcement,announcementsH)}>X</span>
                        <h1>{announcement.title}</h1>
                        <p>{announcement.description}</p>
                        <Link to={{
                                pathname: `/${announcement.title}`,
                                    state:{
                                        announcement
                                        }
                                    }}>
                                        tudum
                        </Link>
                    </div>
                )
            })}
        </React.Fragment>
    )
}