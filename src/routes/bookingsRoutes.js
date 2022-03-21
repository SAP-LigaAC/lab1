import express from 'express';
import {
    addBooking,
    viewBooking
} from '../controllers/bookingsController';


const router = express.Router();

router.get(`/bookings/:id`, viewBooking);
router.post('/booking', addBooking);


export default router;