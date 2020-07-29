import React from 'react';
import AnnouncementCard from "../Announcements/AnnouncementCard";
import {useSelector} from "react-redux";

export default function SearchResult(){
    const searchResultH = useSelector(state => state.Search.searchResult);
    return(
        <div className="announcement-cards">
            <div className="wrapper">
                {searchResultH.length === 0 ?
                    <h1>Oops nothing found</h1>
                    :
                    <React.Fragment>
                        {searchResultH.map((value,index)=>{
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