import profile from "../../assets/person.png"
import phone from "../../assets/phone.png"
import msg from "../../assets/msg1.png"
import contact from "../../assets/contact.png"
import tick from "../../assets/tick.png"
import time from "../../assets/time.png"
import API_BASE_URL from "../../Config/url"
export default class RideDetail {
    constructor(containerId) {
        this.apiUrl = `${API_BASE_URL}/ride_details_log`;  
        this.containerId = containerId; 
        this.init();
    }

    init() {
        this.fetchRides(); 
    }

    async fetchRides() {
        console.log('Fetching ride details...');  

        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                console.error('Network response was not ok', response);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetched Data:', data);  

            if (Array.isArray(data) && data.length > 0) {
                this.populateRideDetails(data);
            } else {
                console.warn('No rides available or received data is not an array');
                this.displayNoDataMessage();
            }
        } catch (error) {
            console.error('Error fetching ride details:', error);
            alert('Failed to load ride details. Please try again later.');
        }
    }

    populateRideDetails(rides) {
        console.log('Populating ride details...');  // Log when populating starts

        const firstRide = rides[0];
        const startLocationElem = document.getElementById('startLocation');
        const distanceElem = document.getElementById('distance');
        const startDateTimeElem = document.getElementById('startDateTime');
        const endLocationElem = document.getElementById('endLocation');
        const endDateTimeElem = document.getElementById('endDateTime');

        if (startLocationElem) {
            startLocationElem.innerText = firstRide.start_location || 'N/A';
        }
        if (distanceElem) {
            distanceElem.innerText = `${firstRide.distance || 0} Km`;
        }
        if (startDateTimeElem) {
            startDateTimeElem.innerText = this.formatDateTime(firstRide.start_datetime);
        }
        if (endLocationElem) {
            endLocationElem.innerText = firstRide.end_location || 'N/A';
        }
        if (endDateTimeElem) {
            endDateTimeElem.innerText = this.formatDateTime(firstRide.end_datetime);
        }

        const container = document.getElementById('passengerDetailsContainer');
        if (!container) {
            console.warn('Passenger details container not found');
            return;
        }
        container.innerHTML = '';  // Clear any previous content

        rides.forEach(ride => {
            const passengerDiv = document.createElement('div');
            passengerDiv.className = 'contentdet';
            passengerDiv.innerHTML = `
                <div class="content1">
                    <div class="profile-name">
                        <img src=${profile} width="30px" height="30px">
                        <p class="profilename">${ride.passenger_name || 'Unknown'}</p>
                    </div>
                    <div class="icon1">
                        <img src=${phone} width="30px">
                        <img src=${msg} width="30px">
                        <img src=${contact} width="30px">
                    </div>
                </div>
                <div class="profile-address1">
                    <p class="address">${ride.start_location || 'Unknown Location'}</p>
                    <div class="profile-date">
                        <p class="date-time">${this.formatDateTime(ride.start_datetime)}</p>
                    </div>
                    <div class="profile-status">
                        <span style="color: ${ride.status === 'Picked Up' ? '#2e7d32' : '#ff7043'}; font-size: medium;">
                            ${ride.status === 'Picked Up' ? `<img src=${tick} alt="" width="14px" >` : `<img src=${time} alt="" width="14px">`} 
                            ${ride.status || 'Unknown'}
                        </span>
                    </div>
                </div>
            `;
            container.appendChild(passengerDiv);
        });
    }

    displayNoDataMessage() {
        const container = document.getElementById('passengerDetailsContainer');
        if (container) {
            container.innerHTML = '<p>No ride details available.</p>';
        }
    }

    formatDateTime(dateTimeString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        return new Date(dateTimeString).toLocaleDateString(undefined, options);
    }
}
