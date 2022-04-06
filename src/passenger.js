class Person {
    constructor(firstName, lastName, emailAddress, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
    }

    display() {
        console.log(this.firstName + ' ' + this.lastName);
    }

}

export default class Passenger extends Person {
    constructor(firstName, lastName, emailAddress, phoneNumber) {
        super(firstName, lastName, emailAddress, phoneNumber);
    }

    bookFlight(flightDate, flightDestination) {
        this.flightDate = flightDate;
        this.flishtDestination = flightDestination;
    }

    display() {
        console.log(super.display() + `booked a flight for ${this.flightDate} to ${this.flishtDestination}`);
    }

}