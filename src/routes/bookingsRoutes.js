import express from 'express';
import {
    addBooking,
    viewBookings,
    viewBooking
} from '../controllers/bookingsController';


const router = express.Router();

router.get(`/bookings`, viewBookings);
router.get(`/bookings/:id`, viewBooking);
router.post('/booking', addBooking);


export default router;