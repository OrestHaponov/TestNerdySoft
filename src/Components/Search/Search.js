import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {changeSearchValue,search} from "../../Store/Action/Search";

export default function Search(props){
    const dispatch = useDispatch();
    const changeSearchValueH = (searchValue) => dispatch(changeSearchValue(searchValue));
    const searchH = (searchValue,announcement) => dispatch(search(searchValue,announcement));
    const searchValueH = useSelector(state => state.Search.searchValue);
    const announcementsH = useSelector(state => state.Announcements.announcements);
    return(
        <form action="" onSubmit={()=>searchH(searchValueH,announcementsH)}>
            <input
                type="text"
                value={searchValueH}
                onChange={changeSearchValueH}
            /> 
            <input type="submit" value="Change"/>
        </form>
    )
}