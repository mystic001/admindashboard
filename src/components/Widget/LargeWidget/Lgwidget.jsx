import React from 'react'
import "./lgwidget.css"
function Lgwidget() {
    return (
        <div className="lgWidgetContainer">
            <span className="title">Latest transactions</span>
            <div class="grid-container">
                <div class="grid-item">Customer</div>
                <div class="grid-item">Date</div>
                <div class="grid-item">Amount</div>
                <div class="grid-item">Status</div>
                <div class="grid-item flex">
                <img src = "https://cdn.pixabay.com/photo/2021/07/14/19/18/woman-6466907__340.jpg" alt ="tell all the boys"></img>
                <h3>Susan Carol</h3>
                </div>
                <div class="grid-item">6</div>
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
            </div>
        </div>
    )
}

export default Lgwidget
