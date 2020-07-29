import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect,useState} from 'react';
import {deleteAnnouncement,hideEditTitleForm,showEditTitleForm,hideEditTextForm,showEditTextForm} from '../../Store/Action/AnnouncementActions';
import EditTitle from './EditAnnouncement/EditTitle';
import EditDescription from './EditAnnouncement/EditDescription';
import Edit from '../../images/edit.png';
import Delete from '../../images/close.png';

export default function AnnouncementCard(props){
    const dispatch = useDispatch();
    const deleteAnnouncementH = (announcement,announcements) => dispatch(deleteAnnouncement(announcement,announcements));
    const announcementsH = useSelector(state => state.Announcements.announcements);
    const showEditTitleFormH = () => dispatch(showEditTitleForm());
    const hideEditTitleFormH = () => dispatch(hideEditTitleForm());
    const showEditTextFormH = () => dispatch(showEditTextForm()); 
    const hideEditTextFormH = () => dispatch(hideEditTextForm()); 
    const hideEditTitleH = useSelector(state => state.AnnouncementActions.hideEditTitle);
    const hideEditDescriptionH = useSelector(state => state.AnnouncementActions.hideEditDescription);
    const [editTitle, setEditTitle] = useState(false);
    const [editDescription, setEditDescription] = useState(false);
        useEffect(() => {
            if(hideEditTitleH === true){ 
                hideEditTitleFormH();
                setEditTitle(false);
            }
            if(hideEditDescriptionH === true){ 
                hideEditTextFormH();
                setEditDescription(false);
            }
        });

        function showFormEditTitle(){
            showEditTitleFormH();
            setEditTitle(true);
        }

        function showFormEditDescription(){
            showEditTextFormH();
            setEditDescription(true);
        }

    return(
        <React.Fragment>
            {props.announcement.map((announcement,index)=>{
                return(
                    <div className="announcement-card" key={index}>
                    <img className="announcement-card__delete" src={Delete} onClick={()=>deleteAnnouncementH(announcement,announcementsH)} />
                    {editTitle === false ?
                        <div className="announcement-card__title">
                            <h1>{announcement.title}</h1>
                            <img src={Edit} onClick={() => showFormEditTitle()} alt=""/>
                        </div>  
                        :
                        <EditTitle 
                            title={announcement.title}
                            announcement={announcement}
                        />
                    }
                    {editDescription === false ?
                        <div className="announcement-card__description">
                            <p>{announcement.description}</p>
                            <img src={Edit} alt="" onClick={() => showFormEditDescription()}/>
                        </div>  
                        :
                        <EditDescription 
                            description={announcement.description}
                            announcement={announcement}
                        />
                    }
                    <div className="announcement-card__more">
                        <Link to={{
                            pathname: `/${announcement.title}`,
                            state:{
                                announcement
                            }
                        }}>
                                        Read more
                        </Link>
                    </div>
                </div>
                )
            })}
        </React.Fragment>
    )
}
