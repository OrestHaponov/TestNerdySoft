import {REFRESH_ANNOUNCEMENTS,START_CHANGE_PAGE,END_CHANGE_PAGE} from "../Action/ActionTypes";

const initialState ={
    announcements: [
        {
            date: "30.7.2020",
            description: "Test 1",
            id: 1,
            title: "Test 1",
        },
        {
            date: "30.7.2020",
            description: "Test 2",
            id: 2,
            title: "Test 2",
        },
        {
            date: "30.7.2020",
            description: "Test 3",
            id: 3,
            title: "Test 3",
        },
        {
            date: "30.7.2020",
            description: "Test 4",
            id: 4,
            title: "Test 4",
        },
        {
            date: "30.7.2020",
            description: "Test 5",
            id: 5,
            title: "Test 5",
        },
        {
            date: "30.7.2020",
            description: "Test 6",
            id: 6,
            title: "Test 6",
        },
        {
            date: "30.7.2020",
            description: "Test 7",
            id: 7,
            title: "Test 7",
        },
    ],
    changePage: false
}

export default function announcement(state = initialState, action){
    switch(action.type){
            case REFRESH_ANNOUNCEMENTS:
                return{
                    ...state, announcements: [...action.announcements]
                }
            case START_CHANGE_PAGE:
                return{
                    ...state, changePage: true
                }
            case END_CHANGE_PAGE:
                return{
                    ...state, changePage: false
                }
        default:
            return state
    }
}