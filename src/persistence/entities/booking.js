import Passenger from "./passenger";

export class Booking {
    constructor(id) {
        this.id = id;
        this.bookingStatus = 'active';
        this.bookingDate = new Date();
    }

    setPassenger(firstName, lastName, emailAddress, phoneNumber, flightDate, flightDestination) {
        this.passenger = new Passenger(firstName, lastName, emailAddress, phoneNumber);
        this.passenger.bookFlight(flightDate, flightDestination);
    }

    cancelBooking() {
        this.bookingStatus = 'cancel';
        this.cancellationDate = new Date();
    }

    display() {
        console.log(`booking with status: ${this.bookingStatus} and passenger: ${this.passenger.display()}`);
    }

}