import {REFRESH_ANNOUNCEMENTS,SHOW_EDIT_TITLE_FORM,HIDE_EDIT_TITLE_FORM,SHOW_EDIT_TEXT_FORM,HIDE_EDIT_TEXT_FORM,START_CHANGE_PAGE,END_CHANGE_PAGE} from "./ActionTypes";

export function reFresh(announcements){
    return{
        type: REFRESH_ANNOUNCEMENTS,
        announcements
    }
}
//DELETE FUNCTION
    export function deleteAnnouncement(announcement, announcements){
        return(dispatch)=>{
            announcements = announcements.filter(delEl => delEl != announcement);
            dispatch(reFresh(announcements));
        }
    }

//EDIT FUNCTIONS
    // EDIT TITLE LOGIC
        export function hideEditTitleForm(){
            return{
                type: HIDE_EDIT_TITLE_FORM,
            }
        }

        export function showEditTitleForm(){
            return{
                type: SHOW_EDIT_TITLE_FORM,
            }
        }

        export function editAnnouncementsTitle(valueEditTitle,announcement,announcements){
            return(dispatch)=>{
                event.preventDefault();
                if(valueEditTitle == "" || valueEditTitle == " "){
                    alert("Please type something");
                }else{
                    announcements.map((value=>{
                        if(value.id == announcement.id){
                            value.title = valueEditTitle;
                        }
                        dispatch(reFresh(announcements));
                        dispatch(hideEditTitleForm());
                    }))
                }
            }
        }

    // EDIT DESCRIPTION LOGIC
        export function hideEditTextForm(){
            return{
                type: HIDE_EDIT_TEXT_FORM,
            }
        }

        export function showEditTextForm(){
            return{
                type: SHOW_EDIT_TEXT_FORM,
            }
        }

        export function editAnnouncementsDescription(valueEditDescription,announcement,announcements){
            return(dispatch)=>{
                event.preventDefault();
                if(valueEditDescription == "" || valueEditDescription == " "){
                    alert("Please type something");
                }else{
                    announcements.map((value=>{
                        if(value.id == announcement.id){
                            value.description = valueEditDescription;
                        }
                        dispatch(reFresh(announcements));
                        dispatch(hideEditTextForm());
                    }))
                }
            }
        }

    //PAGINATION
        export function startChangePage(){
            return{
                type: START_CHANGE_PAGE
            }
        }
        export function endChangePage(){
            return{
                type: END_CHANGE_PAGE
            }
        }