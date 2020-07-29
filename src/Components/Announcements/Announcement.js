import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import SimilarAnnouncements from './SimilarAnnouncements/SimilarAnnouncements';

export default function Announcement(props){
    const dispatch = useDispatch();
    let arrAnnouncement = [props.announcement]
    return(
        <div className="announcement">
            <div className="wrapper">
                <React.Fragment>
                    {arrAnnouncement.map((value,index)=>{
                        return(
                            <div className="announcement__inner" key={index}>
                                <h1>{value.title}</h1>
                                <p>{value.description}</p>
                                <span>{value.date}</span>
                            </div>
                        )
                    })}
                    <SimilarAnnouncements 
                        announcement={props.announcement}
                    />
                </React.Fragment>
            </div>
        </div>
    )
}