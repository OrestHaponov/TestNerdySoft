import React from "react";
import {useLocation} from "react-router-dom";
import Announcement from "./Announcement";

export default function ChooseAnnouncement() {
    let {state} = useLocation();
  return (
        <Announcement 
            announcement={[state.announcement]}
        />
  );
}

