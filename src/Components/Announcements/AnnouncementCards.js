import React from 'react';
import AnnouncementCard from "./AnnouncementCard";
import {useSelector} from "react-redux";

export default function AnnouncementCards(){
    const announcementsH = useSelector(state => state.Announcements.announcements);
    return(
        <div className="announcement-cards">
            <div className="wrapper">
                {announcementsH.length === 0 ?
                    <h1>No announcements yet</h1>
                    :
                    // <AnnouncementCard 
                    //     announcements={announcementsH}
                    // />
                    <React.Fragment>
                        {announcementsH.map((value,index)=>{
                            return(
                                <AnnouncementCard 
                                    key={index}
                                    announcement={[value]}
                                />
                            )
                        })}
                    </React.Fragment>
                }
            </div>
        </div>
    )
}