import React from "react";
import Pagination from "react-js-pagination";
import {connect} from "react-redux";
import AnnouncementCards from "./AnnouncementCards";
import {startChangePage,endChangePage} from "../../Store/Action/AnnouncementActions";

class AnnouncementList extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                activePage: 1,
                announcementsToShow: [],
                announcementsLength: 0
              };
        }

        componentDidMount(){
            let announcements = this.props.announcements;
            let toShow = announcements.slice(0,3);
            this.setState({
                announcementsToShow:toShow,
                announcementsLength: this.props.announcements.length,
            })
            this.props.startChangePage();
        }
        
        componentDidUpdate(prevProps){
            if(this.props.changePage === true || this.props.announcements != prevProps.announcements){
                let announcements = this.props.announcements;
                let pageNum = this.state.activePage-1;
                let firstIndex = pageNum*3;
                let secondIndex = firstIndex+3;
                let toShow = announcements.slice(firstIndex,secondIndex);
                this.setState({
                    announcementsToShow:toShow,
                    announcementsLength: this.props.announcements.length
                })
                this.props.endChangePage();
            }
        }

        handlePageChange=(pageNumber)=>{
            this.setState({activePage: pageNumber});
            this.props.startChangePage();
          }

        render(){
            return(
                <React.Fragment>
                    <AnnouncementCards 
                        announcementsToShow={this.state.announcementsToShow}
                        />
                    {this.props.announcements.length === 0 ? null :
                        <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={3}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        activeLinkClass={"activelink"}
                        hideFirstLastPages={true}
                        totalItemsCount={this.state.announcementsLength}
                        onChange={this.handlePageChange}
                        />
                    }
                </React.Fragment>
            )
        }
    }

    function mapStateToProps(state){
        return{
            announcements: state.Announcements.announcements,
            changePage: state.Announcements.changePage,
        }
    }
    function mapDispatchToProps(dispatch){
        return{
            startChangePage: ()=>dispatch(startChangePage()),
            endChangePage: ()=>dispatch(endChangePage()),
        }
    }
    

export default connect(mapStateToProps,mapDispatchToProps)(AnnouncementList);
