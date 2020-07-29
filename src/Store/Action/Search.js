import {CHANGE_SEARCH_VALUE,SEARCH_RESULT,CLEAR_SEARCH_VALUE} from "./ActionTypes";

//GET CONTROL INPUT
    export function changeSearchValue(searchValue){
        return{
            type: CHANGE_SEARCH_VALUE,
            searchValue
        }
    }

//SEARCH FUNCTIONS
    export function search(searchValue,announcement){
        return(dispatch)=>{
            event.preventDefault();
            if(searchValue == "" || searchValue == " "){
                alert("please type something");
            }else{
                let newAnnouncements = announcement.filter(
                    (value)=>{
                        return value.title.indexOf(searchValue) !== -1;
                    }
                );
                dispatch(searchResult(newAnnouncements));
                dispatch(clearSearchValue());
                window.location.href = "/searchResults";
            }
        }
    }

    export function searchResult(newAnnouncements){
        return{
            type: SEARCH_RESULT,
            newAnnouncements
        }
    }

    export function clearSearchValue(){
        return{
            type: CLEAR_SEARCH_VALUE,
        }
    }