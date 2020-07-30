import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import "./_slick.scss";
import "./_slickTheme.scss";

class SimilarAnnouncements extends React.Component {
    constructor(props){
        super(props)
        this.state={
            similar: [],
        }
    }

    componentDidMount(){
        this.getSimilar(this.props.announcements,this.props.announcement);
    }

    componentDidUpdate(prevProps){
        if (this.props.announcement !== prevProps.announcement) {
            this.getSimilar(this.props.announcements,this.props.announcement);
        }
    }
    
    getSimilar=(announcements, announcement)=>{
        let announcementTitleWords = announcement.title.split(' ');
        let announcementDescriptionWords = announcement.description.split(' ');

        let similar = announcements.filter(({ title, description }) => {
            let titleWords = title.split(' ');
            let descriptionWords = description.split(' ');
            let isTitleSimilar = announcementTitleWords
            .some(word => titleWords.includes(word));
            let isDescriptionSimilar = announcementDescriptionWords
            .some(word => descriptionWords.includes(word));
            return isTitleSimilar && isDescriptionSimilar;
        });
        similar = similar.filter(article => article.id != announcement.id);
        this.setState({
            similar: similar
        })
      }

    render() {  
        const settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <React.Fragment>
                {this.state.similar.length === 0 ? null :
                    <React.Fragment>
                        <h1>Similar announcements</h1>
                        <Slider {...settings}>
                            {this.state.similar.map((announcement,index)=>{
                                return(
                                    <div className="slider-card" key={index}>
                                        <div className="slider-card__title">
                                            <h1>{announcement.title}</h1>
                                        </div>  
                                        <div className="slider-card__description">
                                            <p>{announcement.description}</p>
                                        </div> 
                                    <div className="slider-card__more">
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
                        </Slider> 
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}


export default SimilarAnnouncements;
