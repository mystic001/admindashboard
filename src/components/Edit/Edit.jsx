import React from 'react'
import './edit.css'
function Edit() {
    return (
        <div className="editContainer">
            <h4>Edit</h4>

            <div className="formPicAndUpdate">
                <div className="form"><form>

                    <div className="formInput">
                        <label>Name</label>

                        <input type="text" name="name" />

                    </div>


                    <div className="formInput">
                        <label>Username</label>

                        <input type="text" name="name" />

                    </div>


                    <div className="formInput">

                        <label>Full Name</label>

                        <input type="text" name="name" />

                    </div>


                    <div className="formInput">
                        <label>Email</label>

                        <input type="text" name="name" />

                    </div>


                    <div className="formInput">
                        <label>Phone</label>
                        <input type="text" name="name" />

                    </div>

                    <div className="formInput">
                        <label>Address</label>

                        <input type="text" name="name" />

                    </div>



                </form></div>
                <div className="picandupdate">
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2021/08/06/06/41/cat-6525495__340.jpg" alt="whats up" /></div>
                    <div className="updateContainer">
                        <button>Update</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Edit
