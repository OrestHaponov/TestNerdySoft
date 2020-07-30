import React from 'react';
import AnnouncementCard from "./AnnouncementCard";
import AddAnnouncement from "../AddAnnouncementForm/AddAnnouncement";

export default function AnnouncementCards(props){
    return(
        <div className="announcement-cards">
            <div className="wrapper">
                <AddAnnouncement />
                {props.announcementsToShow.length === 0 ?
                    <h1>No announcements yet</h1>
                    :
                    <React.Fragment>
                        {props.announcementsToShow.map((value,index)=>{
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