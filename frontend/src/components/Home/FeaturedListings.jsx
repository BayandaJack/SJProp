import ListingCard from "../Listings/ListingCard";

export default function FeaturedListings(){
    return (
        <section className="m-3">
            <h1 className="text-4xl font-bold text-red-500">Featured Listings</h1>
            <div className="grid">
                <ListingCard />
                <ListingCard />
            </div>
        </section>
    );
}