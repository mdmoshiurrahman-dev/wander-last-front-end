export type UserBookingData = UserBooking[];
export interface UserBooking {
  _id: string;
  destinationName: string;
  country: string;
  category: string;
  price: string;
  departureDate: string;
  imageUrl: string;
  description: string;
  durationLabel: string;
  overview: string;
  highlights: string[];
  rowHighlights:string
}
