import {REFRESH_ANNOUNCEMENTS} from "./ActionTypes";

//DELETE FUNCTION
    export function deleteAnnouncement(announcement, announcements){
            return(dispatch)=>{
                announcements = announcements.filter(delEl => delEl != announcement);
                dispatch(reFresh(announcements));
            }
    }

    export function reFresh(announcements){
        return{
            type: REFRESH_ANNOUNCEMENTS,
            announcements
        }
    }