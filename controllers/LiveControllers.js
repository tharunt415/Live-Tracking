import queries from '../models/queries.js';

class LiveController {
    async fetchDriverInfo(req, res) {
        try {
            const driverInfo = await queries.getDriverInfo();
            res.json(driverInfo);
        } catch (error) {
            console.error('Error fetching driver info:', error.stack);
            res.status(500).json({ error: 'Error fetching driver info' });
        }
    }

    async fetchLiveTracking(req, res) {
        try {
            const liveTracking = await queries.getLiveTracking();
            res.json(liveTracking);
        } catch (error) {
            console.error('Error fetching live tracking:', error.stack);
            res.status(500).json({ error: 'Error fetching live tracking' });
        }
    }

    async fetchRideDetails(req, res) {
        try {
            const rideDetails = await queries.getRideDetails();
            res.json(rideDetails);
        } catch (error) {
            console.error('Error fetching ride details:', error.stack);
            res.status(500).json({ error: 'Error fetching ride details' });
        }
    }

    async fetchRideDetailsLog(req, res) {
        try {
            const rideDetailsLog = await queries.getRideDetailsLog();
            res.json(rideDetailsLog);
        } catch (error) {
            console.error('Error fetching ride details log:', error.stack);
            res.status(500).json({ error: 'Error fetching ride details log' });
        }
    }

    // Waypoints
    async fetchWaypoints(req, res) {
        try {
            const waypoints = await queries.getWaypoints();
            res.json(waypoints);
        } catch (error) {
            console.error('Error fetching waypoints:', error.stack);
            res.status(500).json({ error: 'Error fetching waypoints' });
        }
    }
}

const liveController = new LiveController();
export default liveController;
