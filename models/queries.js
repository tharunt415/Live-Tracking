import pool from '../Connection/db.js';

class queries {
    async getDriverInfo() {
        const [sql] = await pool.query('SELECT * FROM driver_info');
        return sql;
    }

    async getLiveTracking() {
        const [sql] = await pool.query('SELECT * FROM livetracking');
        return sql;
    }

    async getRideDetails() {
        const [sql] = await pool.query('SELECT * FROM ridedetails');
        return sql;
    }

    async getRideDetailsLog() {
        const [sql] = await pool.query('SELECT * FROM ridedetailslog');
        return sql;
    }

    // Waypoint
    async getWaypoints() {
        const [rows] = await pool.query('SELECT * FROM Waypoints');
        return rows;
    }
}

// Export a single instance for use
const query = new queries();
export default query;
