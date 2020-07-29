import React from "react"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {openForm} from "../../Store/Action/AddAnnouncement";
import Search from "../Search/Search";
import AddAnnouncement from "../AddAnnouncementForm/AddAnnouncement";

class Header extends React.Component{
    
    render(){ 
        return(
            <React.Fragment>
                <div className="header">
                    <ul>
                        <li>
                            <Link to="/">All</Link>   
                        </li>
                        <li>
                            <Search />
                        </li>
                        <li onClick={this.props.openForm}>
                            Open add form
                        </li>
                    </ul>
                </div>
                <AddAnnouncement />
            </React.Fragment>
                
        )
    }
}

function mapStateToProps(state){
    return{
        // toggleBarState: state.Header.toggleBarState,
    }
}

function mapDispatchToProps(dispatch){
    return{
        openForm: ()=>dispatch(openForm()),
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Header);