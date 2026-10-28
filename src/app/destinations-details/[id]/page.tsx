import DestinationDetails from "@/components/destination/DestinationDetails";
import { UserBookingData } from "@/types/UserBooking";
interface params {
  params: Promise<{ id: string }>;
}
async function DetailsPage({ params }: params) {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination-data/${id}`);
  const data: UserBookingData = await res.json();
  return (
    <div className="px-3 w-full max-w-7xl lg:px-8 mx-auto mb-6 md:mb-9 lg:mb-12">
      {data.map((destination) => (
        <DestinationDetails key={destination._id} destination={destination} />
      ))}
    </div>
  );
}

export default DetailsPage;
