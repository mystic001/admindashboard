import React from 'react'
import './userDetail.css'
import {PeopleAlt, MailOutline, CalendarToday, PhoneAndroid, LocationSearching } from '@material-ui/icons'
function UserDetail() {
    return (
        <div className="userDetails">

            <div className="desc">
                <img src="https://cdn.pixabay.com/photo/2021/08/03/02/18/couple-6518232__340.jpg" alt="" />
                <div className="info">
                    <h3>Anna Becker</h3>
                    <span>Software Engineer</span>
                </div>

            </div>


            <div className = "accountSection">
            <h4>Account Details</h4>
            <div className="IconTitle">
                <PeopleAlt />
                <span>annabeck99</span>
            </div>

            <div className="IconTitle">
                <CalendarToday />
                <span>10.12.1999</span>
            </div>
            </div>
            
       

<div className = "contactSection">
<h4>Contact Details</h4>
<div className="IconTitle">
                <PhoneAndroid />
                <span>+1 123 456 67</span>
            </div>

            <div className="IconTitle">
                <MailOutline />
                <span>annabeck@gmail.com
                </span>
            </div>

            <div className="IconTitle">
                <LocationSearching />
                <span>New York | USA</span>
            </div>


</div>
         

        </div>
    )
}

export default UserDetail