import React from 'react'
import "./topbar.css"
import {NotificationsNone as NotificationsNoneIcon,Settings, Language} from '@material-ui/icons';

function Topbar() {
    return (
        <div className = "topbarContainer">
            <div className="topbarWrapper">
                <div className="topbarLogo">
                    BamideleAdmin
                </div>
                <div className="topbarIcon">

                    <div className="topbarIcon-badge">
                    <NotificationsNoneIcon/>
                    <span>2</span>
                    </div>
                    
                    <div className="topbarIcon-badge">
                    <Settings/>
                    </div>

                    <div className="topbarIcon-badge">
                    <Language/>
                    </div>
                    
                    <img className = "topbarImage" src = "https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762__340.jpg" alt = "images"></img>
                    
                </div>
            </div>
        </div>
    )
}

export default Topbar
