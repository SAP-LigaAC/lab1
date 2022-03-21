import {
    Booking
} from '../persistence/entities/booking';
import {
    addBooking,
    getBooking
} from '../persistence/repository/bookingsRepo'

/*
 * if you need to call an external endpoint as part of creating the booking, add them to this service
 */
export const createBooking = async (reqBody) => {
    const {
        id,
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        flightDate,
        flightDestination
    } = reqBody;

    const booking = new Booking(id);
    booking.setPassenger(firstName, lastName, emailAddress, phoneNumber, flightDate, flightDestination);
    return await addBooking(booking);
}

export const readBooking = async (id) => {
    return await getBooking(id);
}
