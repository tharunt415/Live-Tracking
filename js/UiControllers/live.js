
import MapHandler from "../maps/map.js";
import vehicle from "../../assets/vehicle.png";
import location from "../../assets/location.png";
import google from "../../assets/google.png";
import speed from "../../assets/speed.png";
import maps from "../../assets/maps.png";
import eye from "../../assets/path.png";
import arrow from "../../assets/arrow.png";
import API_BASE_URL from "../../Config/url.js"
export class LiveTracking {
    constructor(container) {
        if (!container) {
            console.error('LiveTracking container is not provided.');
            return;
        }
        this.container = container;
        this.fetchLiveTrackingData();
    }
    async fetchLiveTrackingData() {
        try {
            const response = await fetch(`${API_BASE_URL}/live_tracking`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetched live tracking data:', data);

            
            if (Array.isArray(data) && data.length > 0) {
                this.render(data[0]); 
            } else {
                console.warn('Live tracking data is empty or not in the expected format.');
                this.render(); 
            }
        } catch (error) {
            console.error('Failed to fetch live tracking data:', error);
            this.render(); 
        }
    }

    render(data = {}) {
        if (!this.container) {
            console.error('LiveTracking container is not available.');
            return;
        }

        
        const {
            vehicle_registration = 'Unknown',
            vehicle_id = 'NOTVEH0123',
            ride_type = 'Office',
            trip_id = 'Loading..',
            total_fare = '₹ --',
            assigned_client = 'Loading..',
            assigned_location = 'NPT - HCL',
            live_speed = '0 km/h',
            run_time = '0h 0m',
            idle_time = '0m',
            distance_travelled = '0 km',
            seats = '0/0',
            waypoints = '0',
            max_speed = '0 km/h',
            start_date_time = '-- --, --:-- --',
            end_date_time = '-- --, --:-- --',
            trip_type = 'Km'
        } = data;

        this.container.innerHTML = `
                    <div class="live-tracking" id="liveTracking">Live Tracking</div>
                    <div class="vehicle-info">
                        <img src="${vehicle}" alt="Vehicle Image">
                        <div class="vehicle-details">
                            <h2 id="vehicle_registration">${vehicle_registration}</h2>
                            <p id="vehicle_id">${vehicle_id}</p>
                        </div>
                        <a href="#" class="view-details">View Vehicle Detail ></a>
                    </div>
                    <div class="Today">
                        <span style="font-size: 22px; margin-bottom: 20px;" class="To" id="trip_date">${new Date(start_date_time).toLocaleDateString()}</span>
                        <button class="cancel-button" id="cancelButton">Cancel Trip</button>
                    </div>
                    <div class="trip-info">
                        <div style="background-color: #ffecec;">
                            <span id="trip_id" style="color: #251313;font-size: 20px;font-weight: 550;">${trip_id}</span><span>ID</span>
                        </div>
                        <div style="background-color: #f9fbe7;">
                            <span id="ride_type" style="color: #8d4545;font-size: 20px;font-weight: 550;">${ride_type}</span><span>Ride Type</span>
                        </div>
                        <div style="background-color: #e5f7f2;">
                            <span id="total_fare" style="color: #00b180;font-size: 20px;font-weight: 550;">${total_fare}</span><span>Total Fare</span>
                        </div>
                        <div style="background-color: #fceef8;">
                            <span id="assigned_client" style="color: #8e5b89;font-size: 20px;font-weight: 550;">${assigned_client}</span><span>Assigned Client</span>
                        </div>
                        <div style="background-color: #fff6e8;">
                            <span id="assigned_location" style="color: #a86c0b;font-size: 20px;font-weight: 550;">${assigned_location}</span><span>Assigned Location</span>
                        </div>
                    </div>
                    <div class="details">
                        <div class="tracking">
                            <div class="tracking-data" id="live_speed">${live_speed}</div><div>Live Speed</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="run_time">${run_time}</div><div>Run Time</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="idle_time">${idle_time}</div><div>Idle Time</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="distance_travelled">${distance_travelled}</div><div>Distance Travelled</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="seats">${seats}</div><div>Seats</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="waypoints">${waypoints}</div><div>Waypoints</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="max_speed">${max_speed}</div><div>Max Speed</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="start_date_time">${new Date(start_date_time).toLocaleString()}</div><div>Start Time</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="end_date_time">${end_date_time ? new Date(end_date_time).toLocaleString() : '--'}</div><div>End Time</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="trip_type">${trip_type}</div><div>Trip Type</div>
                        </div>
                    </div>
                     <div style="margin-top: 10px; margin-bottom: 20px;" class="toggle-container">
            <div style="background-color: #a0f4ed6d;" class="toggle-s">
              <span><img src=${location} width="15px">GPS Location</span>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </div>
            <div style="background-color: #108bff34;" class="toggle-s">
              <span><img src=${google} width="15px">Google Location</span>
              <label style="margin-bottom: 0px;" class="switch">
                <img class="img-ey" style="margin: 0px;width: 20px;padding-left: 9px;" src=${eye} >
                <!-- <input type="checkbox"> -->
                
              </label>
            </div>
            <div style="background-color: #ff32cc20;" class="toggle-s">
              <span><img src=${speed} width="12px">Overspeed Path</span>
              <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
              </label>
            </div>
            <div style="background-color: #84bbff2b;" class="toggle-s">
              <span><img src=${maps} width="15px">Regular Path</span>
              <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
              </label>
            </div>
            <button style="margin-top: 10px;margin-bottom: 10px;" class="ride-logs-button">
            Ride Logs
            <span class="arrow"><img src=${arrow} width="8px"></span>
          </button>
          </div>
                    
        `;
    }
}

document.addEventListener('DOMContentLoaded' ,()=>{
    const container4 = document.getElementById('map')
    new MapHandler(container4); 
});
export default LiveTracking;
