import React from "react";
import {connect} from "react-redux";
import {editAnnouncementsDescription} from "../../../Store/Action/AnnouncementActions";

class EditDescription extends React.Component {
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
            value: this.props.description
        })
    }

    handleChange=(event)=>{
        this.setState({value: event.target.value});
      }

    render() {  
        return (
         <form action="" onSubmit={()=>this.props.editAnnouncementsDescription(this.state.value,this.props.announcement,this.props.announcements)} className="announcement-card__description-form">
            <textarea
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
        editAnnouncementsDescription: (valueEditDescription,announcement,announcements) => dispatch(editAnnouncementsDescription(valueEditDescription,announcement,announcements)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(EditDescription);
