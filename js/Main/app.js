
import RideDetails from "../UiControllers/main.js";
import TabMenu from "../UiControllers/nav.js";
import LiveTracking from "../UiControllers/live.js";
import Ride from "../UiControllers/ride.js";
import RideDetail from "../UiControllers/rideDetail.js";
// import ToggleInitializer from "../livebuttons/toggle.js";


document.addEventListener('DOMContentLoaded', () => {
const container = document.getElementById('driverProfileContainer')
const container1 = document.getElementById('tab-render')
const container2 = document.getElementById('live-tracking-container')
// const container3 = document.getElementById('toggle')
const container4 = document.getElementById('Ride-details')
const container5 = document.getElementById('passengerDetailsContainer')

new RideDetails(container);
// new ToggleInitializer(container3);  
new TabMenu(container1);
new LiveTracking(container2);
new Ride(container4);
new RideDetail(container5); 
});

