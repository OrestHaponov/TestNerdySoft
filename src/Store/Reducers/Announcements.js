import {REFRESH_ANNOUNCEMENTS} from "../Action/ActionTypes";

const initialState ={
    announcements: [],
}

export default function announcement(state = initialState, action){
    switch(action.type){
            case REFRESH_ANNOUNCEMENTS:
                return{
                    ...state, announcements: [...action.announcements]
                }
        default:
            return state
    }
}