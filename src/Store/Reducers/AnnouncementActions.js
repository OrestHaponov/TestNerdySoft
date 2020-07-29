import {SHOW_EDIT_TITLE_FORM,HIDE_EDIT_TITLE_FORM,SHOW_EDIT_TEXT_FORM,HIDE_EDIT_TEXT_FORM} from "../Action/ActionTypes";

const initialState ={
    hideEditTitle: false,
    hideEditDescription: false,
}

export default function announcementActions(state = initialState, action){
    switch(action.type){
            // EDIT TITLE LOGIC
                case SHOW_EDIT_TITLE_FORM:
                    return{
                        ...state, hideEditTitle: false
                    }
                case HIDE_EDIT_TITLE_FORM:
                    return{
                        ...state, hideEditTitle: true
                    }
            // EDIT DESCRIPTION LOGIC
                case SHOW_EDIT_TEXT_FORM:
                    return{
                        ...state, hideEditDescription: false
                    }
                case HIDE_EDIT_TEXT_FORM:
                    return{
                        ...state, hideEditDescription: true
                    }
        default:
            return state
    }
}