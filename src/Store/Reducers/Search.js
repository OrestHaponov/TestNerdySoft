import {CHANGE_SEARCH_VALUE,SEARCH_RESULT,CLEAR_SEARCH_VALUE} from "../Action/ActionTypes";

const initialState ={
    searchValue: "",
    searchResult: [],
}

export default function announcement(state = initialState, action){
    switch(action.type){
            case CHANGE_SEARCH_VALUE:
                return{
                    ...state, searchValue: action.searchValue.target.value
                }
            case SEARCH_RESULT:
                return{
                    ...state, searchResult: action.newAnnouncements
                }
            case CLEAR_SEARCH_VALUE:
                return{
                    ...state, searchValue: ""
                }
        default:
            return state
    }
}