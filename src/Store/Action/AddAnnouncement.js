import {CHANGE_TITLE,CHANGE_DESCRIPTION,DESCRIPTION_ERROR,REFRESH_ANNOUNCEMENTS,CLEAR_FORM,TITLE_ERROR,REMOVE_TITLE_BORDER,REMOVE_DESCRIPTION_BORDER} from "./ActionTypes";

// GET CONTROL INPUTS
    export function changeTitle(valueTitle){
        return{
            type: CHANGE_TITLE,
            valueTitle
        }
    }

    export function changeDescription(valueDescription){
        return{
            type: CHANGE_DESCRIPTION,
            valueDescription
        }
    }

    // ADD ANNOUNCEMENTS LOGIG
    export function addAnnouncement(title,description,announcements){
        return(dispatch)=>{
            // console.log(title,description,announcements);
            event.preventDefault();
            let add = true;
            if(title == "" || title == " "){
                dispatch(titleError());
                add = false;
            }
            if(description == "" || description == " "){
                dispatch(descriptionError());
                add = false;
            }
            if(add){
                let getDate = new Date();
                let dd = getDate.getDate();
                let mm = getDate.getMonth() + 1;
                let yy = getDate.getFullYear();
                let date = dd + '.' + mm + '.' + yy;
                let statement = {};
                statement["Title"] = title;
                statement["Description"] = description;
                statement["Date"] = date;
                announcements.push(statement);
                dispatch(reFresh(announcements));
                dispatch(clearForm());
            }

        }
    }

    export function clearForm(){
        return{
            type: CLEAR_FORM
        }
    }

    // CHECK INPUTS
        export function titleError(){
            return{
                type: TITLE_ERROR
            }
        }

        export function descriptionError(){
            return{
                type: DESCRIPTION_ERROR
            }
        }

        export function reFresh(announcements){
            return{
                type: REFRESH_ANNOUNCEMENTS,
                announcements
            }
        }

        export function removeTitleErrorBorder(){
            return{
                type: REMOVE_TITLE_BORDER
            }
        }

        export function removeDescriptionErrorBorder(){
            return{
                type: REMOVE_DESCRIPTION_BORDER
            }
        }
