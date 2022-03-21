const bookings = [];

const _getBookingById = (id) => bookings.find(booking => booking.id == id);

/*
 * put here the code to call the database through a DB client
 */

export const addBooking = async (booking) => {

  //just memory storage as we aren't calling db right now
    bookings.push(booking);
}



export const getBooking = async (id) => {

  console.log('looking for booking with id=', id);
  //just memory storage as we aren't calling db right now
  return _getBookingById(id);

}


export const getBookings = async () => {

  console.log('get all bookings');
  //just memory storage as we aren't calling db right now
  return bookings;
}