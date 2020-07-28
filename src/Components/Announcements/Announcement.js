import React from 'react';

export default function Announcement(props){
    return(
        <div className="announcement">
            <div className="wrapper">
                {props.announcement.map((value,index)=>{
                    return(
                        <div className="announcement__inner" key={index}>
                            <h1>{value.title}</h1>
                            <p>{value.description}</p>
                            <span>{value.date}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}