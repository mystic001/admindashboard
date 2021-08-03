<<<<<<< HEAD
import React from 'react'
import './home.css'
import Featuredupdates from '../../components/feauredupdates/Featuredupdates'
import Chart from '../../components/Chart/Chart'
import data from '../../Data';
import Lgwidget from '../../components/Widget/LargeWidget/Lgwidget';
import Smwidget from '../../components/Widget/SmallWidget/Smwidget';
function Home() {

    console.log(data.length);
    return (
        <div className="homeContainer">
            <div className="homeWrapper">
            <Featuredupdates/>
            <Chart dataHouse = {data} dataKey = "Activer_User" title = "User Analytics"/>
            <div className="widgetContainer">
                <Smwidget/>
                <Lgwidget/>
            </div>
            </div>
           
        </div>

    )
}

export default Home
=======
import './home.css';

function Home() {
    return (
        <div>
            Welcome home
        </div>
    )
}

export default Home
>>>>>>> admindashboard/clouddevice
