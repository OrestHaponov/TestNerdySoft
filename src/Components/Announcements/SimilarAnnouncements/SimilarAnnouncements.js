import React from 'react';
import AnnouncementCard from "../AnnouncementCard";
import {useSelector} from "react-redux";
import Slider from "react-slick";
import "./_slick.scss";
import "./_slickTheme.scss";

export default function SimilarAnnouncements(props){
    const announcementsH = useSelector(state => state.Announcements.announcements);
  
    function findSimilarAnnouncements(announcements, targetAnnouncement){
        const targetTitleWords = targetAnnouncement.title.split(' ');
        const targetDescriptionWords = targetAnnouncement.description.split(' ');
        
        return announcements.filter(({ title, description }) => {
          const titleWords = title.split(' ');
          const descriptionWords = description.split(' ');
      
          const isTitleSimilar = targetTitleWords
            .some(word => titleWords.includes(word));
          const isDescriptionSimilar = targetDescriptionWords
            .some(word => descriptionWords.includes(word));
      
            console.log(isTitleSimilar )
          return isTitleSimilar && isDescriptionSimilar;
        });
      };
      
        const settings = {
            dots: false,
            infinite: false,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
    return(
        <div className="announcement-cards">
            <button onClick={()=>findSimilarAnnouncements(announcementsH,props.announcement)}>Push</button>
            {/* <div className="wrapper">
                {announcementsH.length === 0 ?
                    <h1>No announcements yet</h1>
                    :
                    <AnnouncementCard 
                        announcements={announcementsH}
                    />
                }
            </div> */}
            {/* <Slider {...settings}>
                {announcementsH.map((value,index)=>{
                    return(
                        <div className="test">
                            <h1>{value.title}</h1>
                        </div>
                    )
                })}
            </Slider> */}
        </div>
    )
}