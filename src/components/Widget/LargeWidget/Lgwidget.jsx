import React from 'react'
import "./lgwidget.css"
function Lgwidget() {
    return (
        <div className="lgWidgetContainer">
            <span className="title">Latest transactions</span>
            <div class="grid-container">
                <div class="grid-item"><h4>Customer</h4></div>
                <div class="grid-item"><h4>Date</h4></div>
                <div class="grid-item"><h4>Amount</h4></div>
                <div class="grid-item"><h4>Status</h4></div>
                <div class="grid-item">
                <div className = "spread">
                <img src = "https://cdn.pixabay.com/photo/2021/07/14/19/18/woman-6466907__340.jpg" alt ="tell all the boys"></img>
                <span>Susan Carol</span>
                </div>
                
                </div>
                <div class="grid-item">
                <div className = "flex"> <span>2 Jun 2021</span></div>
                   
                </div>
                <div class="grid-item">
                <div className = "flex"><span>$1200</span></div></div>
                <div class="grid-item">
                <div className = "flex statusApproved"><span>Approved</span></div></div>
                

                <div class="grid-item">
                <div className = "spread">
                <img src = "https://cdn.pixabay.com/photo/2021/07/14/19/18/woman-6466907__340.jpg" alt ="tell all the boys"></img>
                <span>Susan Carol</span>
                </div>
                
                </div>
                <div class="grid-item">
                <div className = "flex"> <span>2 Jun 2021</span></div>
                   
                </div>
                <div class="grid-item">
                <div className = "flex"><span>$1200</span></div></div>
                <div class="grid-item">
                <div className = "flex statusDeclined"><span>Declined</span></div></div>

                <div class="grid-item">
                <div className = "spread">
                <img src = "https://cdn.pixabay.com/photo/2021/07/14/19/18/woman-6466907__340.jpg" alt ="tell all the boys"></img>
                <span>Susan Carol</span>
                </div>
                
                </div>
                <div class="grid-item">
                <div className = "flex"> <span>2 Jun 2021</span></div>
                   
                </div>
                <div class="grid-item">
                <div className = "flex"><span>$1200</span></div></div>
                <div class="grid-item">
                <div className = "flex statusPending"><span>Pending</span></div></div>

                <div class="grid-item">
                <div className = "spread">
                <img src = "https://cdn.pixabay.com/photo/2021/07/14/19/18/woman-6466907__340.jpg" alt ="tell all the boys"></img>
                <span className = "gridusername">Susan Carol</span>
                </div>
                
                </div>
                <div class="grid-item">
                <div className = "flex"> <span>2 Jun 2021</span></div>
                   
                </div>
                <div class="grid-item">
                <div className = "flex"><span>$1200</span></div></div>
                <div class="grid-item">
                <div className = "flex statusApproved"><span>Approved</span></div></div>
            </div>
        </div>
    )
}

export default Lgwidget
