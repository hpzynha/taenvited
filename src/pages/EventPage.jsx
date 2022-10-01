import React from "react";
import BirthdayCake from "../assets/images/BirthdayCake.png";
import Calendar from "../assets/images/Calendar.svg";
import Location from "../assets/images/location.svg";
import "../assets/styles/EventPage.scss";

const EventPage = () => {

    const data = {
        streetName: '',
        address: '',
        date: '',
    }

  return (
    <div className="event-container">
      <div className="event">
        <div className="birthdaycake-img">
          <img src={BirthdayCake} class="birthdaycake-image" />
        </div>
        <div className="birthdat-event-information">
          <div className="event-title">Birthday Bash</div>
          <div className="event-host">
            Hosted by <span>Elysia</span>
          </div>
          <div className="row">
            <div className="icon">
              <img src={Calendar} alt="calendar" />
            </div>
            <div className="text-event">
            <div class="title"><input className="title" placeholder="18 August 6:00PM" 
              onChange={(e) =>{ data.setState({streetName: e.target.value})}}
              /></div>
              
              <br />
              <p>
                to <span className="date-evidence">19 August 1:00PM UTC</span>{" "}
                +10
              </p>
            </div>
          </div>
          <div className="row">
            <div className="icon">
              <img src={Location} alt="location" />
            </div>
            <div className="text-event">
              <div class="title"><input className="title" placeholder="Street name" 
              onChange={(e) =>{ data.setState({streetName: e.target.value})}}
              /></div>
              <br />
              <p><input placeholder="Suburb, state, Postcode" 
              onChange={(e) =>{ data.setState({streetName: e.target.value})}}
              />
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
