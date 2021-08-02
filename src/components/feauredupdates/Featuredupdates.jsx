import React from 'react'
import './featuredupdates.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
function Featuredupdates() {
    return (
        <div className="featuredupdatesContainer">
            <div className="featuredContent">
                <h1>Revenue</h1>
                <div className="featuredContentdetails">
                    <span>$2,415</span>
                    <div className="featuredInd">
                        <p>-11.4</p>
                        <ArrowDownward style={{ color: "red" }}/>
                    </div>
            
                </div>
                <p>Compared to last month</p>
            </div>


            <div className="featuredContent">
                <h1>Sales</h1>
                <div className="featuredContentdetails">
                    <span>$4,415</span>
                    <div className="featuredInd">
                        <p>-1.4</p>
                        <ArrowDownward style={{ color: "red" }}/>
                    </div>

                </div>
                <p>Compared to last month</p>
            </div>

            <div className="featuredContent">
                <h1>Cost</h1>
                <div className="featuredContentdetails">
                    <span>$2,225</span>
                    <div className="featuredInd">
                        <p>-11.4</p>
                        <ArrowUpward style={{ color: "green" }}/>

                    </div>

                </div>
                <p>Compared to last month</p>
            </div>

        </div>
    )
}

export default Featuredupdates
