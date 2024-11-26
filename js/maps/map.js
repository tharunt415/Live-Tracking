 import car from "../../assets/car.png";
 export class MapHandler {
    constructor(mapContainerId) {
        this.mapContainerId = mapContainerId;
        this.waypoints = [
            { lat: 13.0827, lng: 80.2707, label: 'chetpet' },
            { lat: 13.0850, lng: 80.2780, label: '2km, 7:30 a.m.' },
            { lat: 13.0900, lng: 80.2850, label: '3km, 8:00 a.m.' },
            { lat: 13.1000, lng: 80.2900, label: '4km, 8:30 a.m.' }
        ];
        this.map = null;
        this.carMarker = null;
        this.index = 0;

        
        this.initMap();
    }

    initMap() {
        this.map = L.map(this.mapContainerId).setView([13.0827, 80.2707], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(this.map);

        this.initCarMarker();

        this.addWaypoints();

    
        this.drawPath();

    
        this.moveCar();
    }

    initCarMarker() {
        const carIcon = L.icon({
            iconUrl: car,
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });

       
        this.carMarker = L.marker([this.waypoints[0].lat, this.waypoints[0].lng], { icon: carIcon })
            .addTo(this.map);
    }

    moveCar() {
        if (this.index >= this.waypoints.length) return;

        const waypoint = this.waypoints[this.index];
        this.carMarker.setLatLng([waypoint.lat, waypoint.lng])
            .bindPopup(waypoint.label)
            .openPopup();
        this.index++;

       
        setTimeout(() => this.moveCar(), 3000);
    }

   
    addWaypoints() {
        this.waypoints.forEach(point => {
            L.marker([point.lat, point.lng])
                .addTo(this.map)
                .bindPopup(point.label)
                .openPopup();
        });
    }
    
    drawPath() {
        const latlngs = this.waypoints.map(point => [point.lat, point.lng]);
        L.polyline(latlngs, { color: 'black' }).addTo(this.map);
    }
}
export default MapHandler;
// import car from "../../assets/car.png";
// import API_BASE_URL from "../../config/url";

// export class MapHandler {
//     constructor(mapContainerId) {
//         this.mapContainerId = mapContainerId;
//         this.waypoints = [];
//         this.map = null;
//         this.carMarker = null;
//         this.index = 0;

//         // Fetch waypoints and initialize the map once data is loaded
//         this.fetchWaypoints();
//     }

//     // Fetch waypoint data from API
//     async fetchWaypoints() {
//         try {
//             const response = await fetch(`${API_BASE_URL}/Waypoints`); // Replace API_BASE_URL with the actual base URL of your API
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             this.waypoints = data;
//             this.initMap(); // Initialize map after data is fetched
//         } catch (error) {
//             console.error('Error fetching waypoints:', error);
//         }
//     }

//     initMap() {
//         this.map = L.map(this.mapContainerId).setView([this.waypoints[0].lat, this.waypoints[0].lng], 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; OpenStreetMap contributors'
//         }).addTo(this.map);

//         this.initCarMarker();
//         this.addWaypoints();
//         this.drawPath();
//         this.moveCar();
//     }

//     initCarMarker() {
//         const carIcon = L.icon({
//             iconUrl: car,
//             iconSize: [40, 40],
//             iconAnchor: [20, 20]
//         });

//         this.carMarker = L.marker([this.waypoints[0].lat, this.waypoints[0].lng], { icon: carIcon })
//             .addTo(this.map);
//     }

//     moveCar() {
//         if (this.index >= this.waypoints.length) return;

//         const waypoint = this.waypoints[this.index];
//         this.carMarker.setLatLng([waypoint.lat, waypoint.lng])
//             .bindPopup(waypoint.label)
//             .openPopup();
//         this.index++;

//         setTimeout(() => this.moveCar(), 3000);
//     }

//     addWaypoints() {
//         this.waypoints.forEach(point => {
//             L.marker([point.lat, point.lng])
//                 .addTo(this.map)
//                 .bindPopup(point.label)
//                 .openPopup();
//         });
//     }

//     drawPath() {
//         const latlngs = this.waypoints.map(point => [point.lat, point.lng]);
//         L.polyline(latlngs, { color: 'black' }).addTo(this.map);
//     }
// }

// export default MapHandler;
