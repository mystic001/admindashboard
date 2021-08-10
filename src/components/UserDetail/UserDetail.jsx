import React from 'react'
import './userDetail.css'
import {AccessAlarm} from '@material-ui/icons'
function UserDetail() {
    return (
        <div className="userDetails">

            <div className="desc">
                <img src="https://cdn.pixabay.com/photo/2021/08/03/02/18/couple-6518232__340.jpg" alt="" />
                <div className="info">
                <span>Name</span>
                <span>Title</span>
                </div>
              
            </div>

            <div className="IconTitle">
                <AccessAlarm/>
            </div>

        </div>
    )
}

export default UserDetail