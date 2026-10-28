export interface BookedItem {
  departureDate: string;
  id: string;
  destinationName: string;
  price: string; // Note: Represented as a string in the JSON data
  bookingId: string;
  imageUrl: string;
}

export interface UserBookingData {
  _id: string;
  email: string;
  bookedData: BookedItem[];
}
