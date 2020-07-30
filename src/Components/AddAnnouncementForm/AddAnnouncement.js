import React from 'react';
import {changeTitle,changeDescription,addAnnouncement,removeTitleErrorBorder,removeDescriptionErrorBorder} from "../../Store/Action/AddAnnouncement";
import {useSelector,useDispatch} from "react-redux";

export default function AddAnnouncement(){
    const dispatch = useDispatch();
    const changeTitleH = (valueTitle) => dispatch(changeTitle(valueTitle));
    const changeDescriptionH = (valueDescription) => dispatch(changeDescription(valueDescription));
    const addAnnouncementH = (title,description,announcements) => dispatch(addAnnouncement(title,description,announcements));
    const removeTitleErrorBorderH = () => dispatch(removeTitleErrorBorder());
    const removeDescriptionErrorBorderH = () => dispatch(removeDescriptionErrorBorder());
    const announcementsH = useSelector(state => state.Announcements.announcements);
    const valueTitleH = useSelector(state => state.AddAnnouncement.valueTitle);
    const valueDescriptionH = useSelector(state => state.AddAnnouncement.valueDescription);
    const descriptionErrorH = useSelector(state => state.AddAnnouncement.descriptionError);
    const titleErrorH = useSelector(state => state.AddAnnouncement.titleError);
    return(
        <div className="add">
            <div className="wrapper">
                <form  className="add__form" onSubmit={()=>addAnnouncementH(valueTitleH,valueDescriptionH,announcementsH)}>
                    <input type="text" className={titleErrorH === true ? "error" : null} value={valueTitleH}  onChange={changeTitleH} onInput={removeTitleErrorBorderH} placeholder="Title"/>
                    <textarea  className={descriptionErrorH === true ? "error" : null} value={valueDescriptionH}  onChange={changeDescriptionH} onInput={removeDescriptionErrorBorderH} placeholder="Announcement"/>
                    <input type="submit" value="Add" className="add__form-button"/>
                </form>
            </div>
        </div>
    )
}