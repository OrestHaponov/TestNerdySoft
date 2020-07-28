import {CHANGE_TITLE,CHANGE_DESCRIPTION,DESCRIPTION_ERROR,CLEAR_FORM,TITLE_ERROR,REMOVE_TITLE_BORDER,REMOVE_DESCRIPTION_BORDER} from "../Action/ActionTypes";

const initialState ={
    valueTitle: "",
    valueDescription: "",
    titleError: false,
    descriptionError: false,
}

export default function addAnnouncement(state = initialState, action){
    switch(action.type){
        // GET CONTROL INPUTS
            case CHANGE_TITLE:
                return{
                    ...state, valueTitle: action.valueTitle.target.value
                }
            case CHANGE_DESCRIPTION:
                return{
                    ...state, valueDescription: action.valueDescription.target.value
                }
            // ADD ANNOUNCEMENTS LOGIG
            case CLEAR_FORM:
                return{
                    ...state, valueTitle: "", valueDescription: ""
                }
                // CHECK INPUTS
                case TITLE_ERROR:
                    return{
                        ...state, titleError: true
                    }
                case DESCRIPTION_ERROR:
                    return{
                        ...state, descriptionError: true
                    }
                case REMOVE_TITLE_BORDER:
                    return{
                        ...state, titleError: false
                    }
                case REMOVE_DESCRIPTION_BORDER:
                    return{
                        ...state, descriptionError: false
                    }
        default:
            return state
    }
}