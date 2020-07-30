import React from "react"
import {Link} from "react-router-dom";
import Search from "../Search/Search";

class Header extends React.Component{
    
    render(){ 
        return(
            <div className="header">
                <ul>
                    <li>
                        <Link to="/">All announcements</Link>   
                    </li>
                    <li>
                        <Search />
                    </li>
                </ul>
            </div>    
        )
    }
}

export default Header;