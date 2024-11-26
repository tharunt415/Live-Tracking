import back from "../../assets/back.png"
import drop from "../../assets/drop.png"
import removr from "../../assets/image-removebg-preview.png"
import pen from "../../assets/pen.png"
import del from "../../assets/del.png"
import profile from "../../assets/profile.png"
import API_BASE_URL from "../../Config/url";
 export class RideDetails {
    constructor(container) {
        this.container = container;
        this.user_id = 'NOTDR001';
        this.fetchDriverData(); 
    }
    async fetchDriverData() {
        try {
            const response = await fetch(`${API_BASE_URL}/driver_info`); 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error('Error fetching driver data:', error);
            this.render(); 
        }
    }

    // Format time in HH:MM format
    formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        return `${hours}h ${minutes}m`;
    }

    render(data = []) {
        if (!Array.isArray(data) || data.length === 0) {
            this.container.innerHTML = '<p>No driver data available.</p>';
            return;
        }

        const driverHTML = data.map(driver => {
            const {
                name = 'Loading...',
                last_update = 'Loading...',
                user_id = 'Loading...',
                experience_years = 'N/A',
                total_distance = 'N/A',
                total_hours = 'N/A',
                total_office_trips = 'N/A',
                total_regular_trips = 'N/A',
                total_revenue = 'N/A',
                driver_revenue = 'N/A',
                joined_date = 'N/A',
                status = 'N/A'
            } = driver;

            return `
                <div class="profile-header">
                    <div class="status-container">
                        <div class="left">
                            <img src=${back} alt="Back" class="back-icon" width="30px" height="30px">
                        </div>
                        <div class="right">
                            <div class="status-button">
                                <span class="active-1">
                                    <img style="width: 30px; display: flex; justify-content: center;" src=${removr} alt="">
                                    2 Documents are yet to expire
                                </span>
                            </div>
                            <div class="status-button">
                                <button class="active-m">
                                    <span id="status">${status}</span>
                                    <img style="padding-left: 4px;" src=${drop} alt="" width="10px">
                                </button>
                            </div>
                            <div class="icon-button">
                                <button class="pen"><img src=${pen} width="20px"></button>
                            </div>
                            <div class="icon-button">
                                <button class="del"><img src=${del} width="20px"></button>
                            </div>
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="img">
                            <img src=${profile} alt="User Profile Picture" class="logo">
                        </div>
                        <div class="name-txt">
                            <h3 id="user-name">${name} 
                                <span class="sub-text" id="last-update">Last Update: ${new Date(last_update).toLocaleString()}</span>
                            </h3>
                            <span class="NOTDR001" id="user-id">${user_id}</span>
                        </div>
                    </div>
                    <div class="status-section">
                        <div class="status-card">
                            <h3 id="experience_years">${experience_years ? `${experience_years} Years` : 'N/A'}</h3>
                            <p>Experience</p>
                        </div>
                        <div class="status-card">
                            <h3 id="total_distance">${total_distance ? `${total_distance} Km` : 'N/A'}</h3>
                            <p>Total Distance</p>
                        </div>
                        <div class="status-card">
                            <h3 id="total_hours">${total_hours ? this.formatTime(total_hours) : 'N/A'}</h3>
                            <p>Total Hours</p>
                        </div>
                        <div class="status-card">
                            <h3 id="total_office_trips">${total_office_trips !== undefined ? total_office_trips : 'N/A'}</h3>
                            <p>Total Office Trips</p>
                        </div>
                        <div class="status-card">
                            <h3 id="total_regular_trips">${total_regular_trips !== undefined ? total_regular_trips : 'N/A'}</h3>
                            <p>Total Regular Trips</p>
                        </div>
                        <div class="status-card">
                            <h3 id="total_revenue">${total_revenue ? `₹${total_revenue.toLocaleString()}` : 'N/A'}</h3>
                            <p>Total Revenue</p>
                        </div>
                        <div class="status-card">
                            <h3 id="driver_revenue">${driver_revenue ? `₹${driver_revenue.toLocaleString()}` : 'N/A'}</h3>
                            <p>Driver Revenue</p>
                        </div>
                        <div class="status-card">
                            <h3 id="joined_date">${joined_date ? new Date(joined_date).toLocaleDateString() : 'N/A'}</h3>
                            <p>Joined Date</p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Update the container's innerHTML
        this.container.innerHTML = driverHTML;
    }
}

export default RideDetails;
