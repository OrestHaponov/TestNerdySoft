import React from "react";
import {connect} from "react-redux";
import {editAnnouncementsTitle} from "../../../Store/Action/AnnouncementActions";

class EditTitle extends React.Component {
    constructor(props){
        super(props)
        this.state={
            value: "",
        }
    }

    componentDidMount(){
        this.changeValue()
    }
    
    changeValue=()=>{
        this.setState({
            value: this.props.title
        })
    }

    handleChange=(event)=>{
        this.setState({value: event.target.value});
      }


    render() {  
        return (
         <form action="" onSubmit={()=>this.props.editAnnouncementsTitle(this.state.value,this.props.announcement,this.props.announcements)} className="announcement-card__title-form">
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
            /> 
            <input type="submit" value="Change"/>   
        </form>
        );
    }
}

function mapStateToProps(state){
    return{
        announcements: state.Announcements.announcements,
    }
}

function mapDispatchToProps(dispatch){
    return{
        editAnnouncementsTitle: (valueEditTitle,announcement,announcements) => dispatch(editAnnouncementsTitle(valueEditTitle,announcement,announcements)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(EditTitle);
