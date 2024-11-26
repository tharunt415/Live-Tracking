// import LiveTracking from './live.js';
// import Ride from './ride.js';

// export class TabMenu {
//     constructor(container) {
//         this.container = container;
//         this.activeTab = 'Live Tracking';
//         this.mapContainer = document.getElementById('map');
//         this.liveTrackingContainer = document.getElementById('live-tracking-container');
//         this.rideDetailsContainer = document.getElementById('passengerDetailsContainer');
//         this.liveTrackingInstance = null;
//         this.rideInstance = null; 
//         this.render();
//         this.addEventListeners();
//         this.updateMapVisibility(); 
//     }

//     render() {
//         this.container.innerHTML = `
//             <div class="tab-buttons">
//                 <button class="tab-button ${this.activeTab === 'Personal Details' ? 'active' : ''}" data-tab="Personal Details">Personal Details</button>
//                 <button class="tab-button ${this.activeTab === 'Live Tracking' ? 'active' : ''}" data-tab="Live Tracking">Live Tracking</button>
//                 <button class="tab-button ${this.activeTab === 'Services Applied' ? 'active' : ''}" data-tab="Services Applied">Services Applied</button>
//                 <button class="tab-button ${this.activeTab === 'Trip History' ? 'active' : ''}" data-tab="Trip History">Trip History</button>
//                 <button class="tab-button ${this.activeTab === 'Payment Reports' ? 'active' : ''}" data-tab="Payment Reports">Payment Reports</button>
//                 <button class="tab-button ${this.activeTab === 'Vehicles Driven' ? 'active' : ''}" data-tab="Vehicles Driven">Vehicles Driven</button>
//                 <button class="tab-button ${this.activeTab === 'Customer Feedback' ? 'active' : ''}" data-tab="Customer Feedback">Customer Feedback</button>
//                 <button class="tab-button ${this.activeTab === 'Accidental Reports' ? 'active' : ''}" data-tab="Accidental Reports">Accidental Reports</button>
//             </div>
//         `;
//     }

//     addEventListeners() {
//         const buttons = this.container.querySelectorAll('.tab-button');
//         buttons.forEach(button => {
//             button.addEventListener('click', () => this.handleTabClick(button));
//         });
//     }

//     handleTabClick(button) {
//         const tabName = button.getAttribute('data-tab');
//         this.activeTab = tabName;
//         this.render(); 
//         this.addEventListeners(); 

        
//         if (this.activeTab !== 'Live Tracking') {
//             this.liveTrackingContainer.innerHTML = ''; 
//             this.rideDetailsContainer.innerHTML = ''; 
//             this.liveTrackingInstance = null; 
//             this.rideInstance = null; 
//         } else {
//             this.initLiveTracking();
//             this.initRide();
//         }
//         this.updateMapVisibility();
//     }

//     initLiveTracking() {
//         if (!this.liveTrackingInstance) {
//             this.liveTrackingInstance = new LiveTracking(this.liveTrackingContainer);
//         }
//     }

//     initRide() {
//         if (!this.rideInstance) {
//             this.rideInstance = new Ride('ride-details-container');
//         }
//     }

//     updateMapVisibility() {
//         if (this.activeTab === 'Live Tracking') {
//             this.mapContainer.style.display = 'block'; 
//         } else {
//             this.mapContainer.style.display = 'none';
//         }
//     }
// }

// export default TabMenu;
import LiveTracking from './live.js';
import Ride from './ride.js';

export class TabMenu {
    constructor(container) {
        this.container = container;
        this.activeTab = 'Live Tracking';
        this.mapContainer = document.getElementById('map');
        this.liveTrackingContainer = document.getElementById('live-tracking-container');
        this.rideDetailsContainer = document.getElementById('passengerDetailsContainer');
        this.liveTrackingInstance = null;
        this.rideInstance = null;

        this.render();
        this.addEventListeners();
        this.updateMapVisibility();
    }

    render() {
        this.container.innerHTML = `
            <div class="tab-buttons">
                ${this.createTabButton('Personal Details')}
                ${this.createTabButton('Live Tracking')}
                ${this.createTabButton('Services Applied')}
                ${this.createTabButton('Trip History')}
                ${this.createTabButton('Payment Reports')}
                ${this.createTabButton('Vehicles Driven')}
                ${this.createTabButton('Customer Feedback')}
                ${this.createTabButton('Accidental Reports')}
            </div>
        `;
    }

    createTabButton(tabName) {
        return `<button class="tab-button ${this.activeTab === tabName ? 'active' : ''}" data-tab="${tabName}">${tabName}</button>`;
    }

    addEventListeners() {
        const buttons = this.container.querySelectorAll('.tab-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => this.handleTabClick(button));
        });
    }

    handleTabClick(button) {
        const tabName = button.getAttribute('data-tab');
        this.activeTab = tabName;
        this.render();
        this.addEventListeners();

        if (this.activeTab !== 'Live Tracking') {
            this.clearContainers();
        } else {
            this.initLiveTracking();
            this.initRide();
            
        }
        this.updateMapVisibility();
    }

    clearContainers() {
        this.liveTrackingContainer.innerHTML = '';
        this.rideDetailsContainer.innerHTML = '';
        this.mapContainer.innerHTML='';
        this.liveTrackingInstance = null;
        this.rideInstance = null;
    }

    initLiveTracking() {
        if (!this.liveTrackingInstance) {
            this.liveTrackingInstance = new LiveTracking(this.liveTrackingContainer);
        }
    }

    initRide() {
        if (!this.rideInstance) {
            this.rideInstance = new Ride('ride-details-container');
        }
    }

    updateMapVisibility() {
        this.mapContainer.style.display = (this.activeTab === 'Live Tracking') ? 'block' : 'none';
    }
}

export default TabMenu;
