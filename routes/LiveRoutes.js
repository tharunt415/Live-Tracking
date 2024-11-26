import express from 'express';
import liveController from '../controllers/LiveControllers.js';

class LiveRoutes {
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/driver_info', (req, res) => liveController.fetchDriverInfo(req, res));
        this.router.get('/live_tracking', (req, res) => liveController.fetchLiveTracking(req, res));
        this.router.get('/ride_details', (req, res) => liveController.fetchRideDetails(req, res));
        this.router.get('/ride_details_log', (req, res) => liveController.fetchRideDetailsLog(req, res));
        // this.router.get('/waypoints', (req, res) => liveController.fetchWaypoints(req, res));
    }

    getRouter() {
        return this.router;
    }
}

export default new LiveRoutes().getRouter();
