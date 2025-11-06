import ListingCard from "../Listings/ListingCard";

const mockListings = [
  {
    id: 1,
    title: "Modern Apartment in Sandton",
    price: "R2,300,000",
    bedrooms: "3",
    bathrooms: "2",
    size: "127 sqm",
    image: "/random.png",
    location: "Sandton, Johannesburg",
  },
  {
    id: 2,
    title: "Cozy Family Home",
    price: "R1,750,000",
    bedrooms: "2",
    bathrooms: "3",
    size: "450 sqm",
    image: "/banner.jpeg",
    location: "Fourways, Johannesburg",
  },
  {
    id: 3,
    title: "Luxury Villa",
    price: "R5,600,000",
    bedrooms: "5",
    bathrooms: "2",
    size: "768 sqm",
    image: "/villa.jpg",
    location: "Clifton, Cape Town",
  },
];

export default function FeaturedListings(){
    return (
        <section className="m-3">
            <h1 className="text-4xl font-bold text-red-500">Featured Listings</h1>
            <div className="flex flex-col">
                {mockListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </div>
        </section>
    );
}