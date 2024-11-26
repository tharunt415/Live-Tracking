import image from "../../assets/image.png"
import car from "../../assets/car.png"
import flag from "../../assets/flag.png"
import startlocation from "../../assets/startlocation.png"
import API_BASE_URL from "../../Config/url"
export default class Ride {
    constructor(containerId) {
        this.containerId = containerId;
        this.init(); 
    }

    async init() {
        this.createRideDetailsContainer(); 
        await this.fetchRideDetails(); 
    }

   
    createRideDetailsContainer() {
        const existingContainer = document.getElementById(this.containerId);
        if (!existingContainer) {
            const detailsContainer = document.createElement('div');
            detailsContainer.id = this.containerId;
            document.body.appendChild(detailsContainer); // Append to the body or a specific parent element
        }
    }

    // Fetch ride details from the API
    async fetchRideDetails() {
        try {
            const response = await fetch(`${API_BASE_URL}/ride_details`);
            if (!response.ok) {
                throw new Error('Failed to fetch ride details');
            }
            const rideDataArray = await response.json();
            console.log("Fetched ride details:", rideDataArray);

            const detailsContainer = document.getElementById(this.containerId);
            detailsContainer.innerHTML = ''; 

            rideDataArray.forEach(rideData => {
                // Validate and parse run_time string (HH:MM:SS)
                const runTimeParts = rideData.run_time ? rideData.run_time.split(':') : [0, 0];
                const hours = parseInt(runTimeParts[0] || '0', 10);
                const minutes = parseInt(runTimeParts[1] || '0', 10);

                detailsContainer.innerHTML += `
                     <div class="map-route">
                       <div style="background-color: rgba(211, 211, 211, 0.35); padding: 5px 10px; border-radius: 8px 8px 0px 0px ;" class="hed">
                              <h3 >Ride Logs</h3>
                       </div>
                    <div class="details">
                        <div style="background-color: #e5eae936;" class="tracking">
                            <div class="tracking-data">${rideData.trip_distance}<span> km</span></div>
                            <div>Trip Distance</div>
                        </div>
                        <div style="background-color: #e5eae936;" class="tracking">
                            <div class="tracking-data">${rideData.number_of_pickups}</div>
                            <div>No of Pickup</div>
                        </div>
                        <div style="background-color: #e5eae936;" class="tracking">
                            <div class="tracking-data">${rideData.number_of_drops}</div>
                            <div>No. of Drop</div>
                        </div>
                        <div style="background-color: #e5eae936;" class="tracking">
                            <div class="tracking-data">${hours}h ${minutes}m</div>
                            <div>Run Time</div>
                        </div>
                        <div style="background-color: #e5eae936;" class="tracking">
                            <div class="tracking-data">${rideData.waypoints}</div>
                            <div>Waypoints</div>
                        </div>
                    </div>
                     <div class="det">
                    <div class="content"> 
                         <p style="font-size: 12px; justify-self: center; padding-right: 15px; padding: 1%;" class="location">
                             <img style="width: 20px; margin-left: -33px; margin-bottom: -8px;" src=${startlocation} width="15px"> Start Location
                         </p>
                         <p class="address">#8/25, 2nd Floor, Kambar Street, Alandur, Chennai - 600 016</p>
                         <p class="distance">10000 Km <img src=${image} width="15px"> <a href="#" class="view-image">View Image</a></p>
                         <p class="date-time">1 Jan 2022, 6:30 a.m.</p>
                         <div class="car">
                         <img src=${car} width="50px" style="margin-left: -45px;">
                         </div>
                     </div>
                     <div id="passengerDetailsContainer" class="content"></div>
                     <div class="content">
                         <img style="width: 20px; margin-left: -21px;" src=${flag} width="15px">
                         <p class="location">End Location</p>
                         <p class="address">#8/25, 2nd Floor, Kambar Street, Alandur, Chennai - 600 016</p>
                         <p class="date-time">1 Jan 2022, 10:00 a.m.</p>
                     </div>
                 </div>
                 </div>
                `;
            });
        } catch (error) {
            console.error('Error fetching ride details:', error);
        }
    }
}
