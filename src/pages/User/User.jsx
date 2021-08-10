import React from 'react'
import './user.css';
import UserDetail from '../../components/UserDetail/UserDetail';
import UserCreate from '../../components/UserCreate/UserCreate';
function User() {
    return (
        <div className="userContainer">
            <div className="userWrapper">
                <div className="userEditAndCreate">

                    <div className='userEdit'><h3>Edit User</h3></div>
                    <button>Create</button>
                </div>

                <div className='userDetCreate'>
                    <UserDetail />
                    <UserCreate />
                </div>

            </div>
        </div>
    )
}

export default User
