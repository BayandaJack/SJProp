import ListingCard from "../Listings/ListingCard";
import { useEffect, useState } from "react";

/*
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
*/

export default function FeaturedListings(){
  //Deal with call to API for data
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const res = await fetch('http://localhost:4000/api/properties');
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        console.log("Fetched data:", data);
        console.log(data[0].title);
        setListings(Array.isArray(data) ? data : []); // ✅ ensure array
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProperties();
  }, []);

  if (loading){
    return (
      <>
        <p>Loading featured listings...</p>
      </>
    );
  }
  if (listings.length === 0) return <p>No listings found.</p>;


  return (
      <section className="m-3">
        <h1 className="text-4xl font-bold text-red-500">Featured Listings</h1>
        {listings.map((listing) => {
          return <ListingCard key={listing._id} listing={listing}/>
        })}
      </section>
    );
}