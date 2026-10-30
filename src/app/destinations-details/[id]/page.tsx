import DestinationDetails from "@/components/destination/DestinationDetails";
import { auth } from "@/lib/auth";
import { UserBookingData } from "@/types/UserBooking";
import { headers } from "next/headers";
interface params {
  params: Promise<{ id: string }>;
}
async function DetailsPage({ params }: params) {
  const jwt = await auth.api.getToken({
    headers: await headers(),
  });
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination-data/${id}`, {
    headers: {
      authorization: `Bearer ${jwt.token}`,
    },
  });
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
