
import React from "react";
import BirthdayCake from '../assets/images/BirthdayCake.png'
import '../assets/styles/EventPage.scss';

const EventPage = ()=>{
    return(
        <div className="event-container">
            <div className="event">
                <div className="birthdaycake-img">
                    <img src={BirthdayCake} class="birthdaycake-image" />
                </div>
                <div className="birthdat-event-information">
                    <div className="event-title">
                    Birthday Bash
                    </div>
                    <div className="event-host">
                        Hosted by <span>Elysia</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPage;