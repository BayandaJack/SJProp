import ListingsCard from "../components/Listings/ListingCard";
import FeaturedListings from "../components/Home/FeaturedListings";

export default function Listings(){
    return (
        <>
            <h1>Listings Page!!!</h1>
            <section className="flex flex-row gap-5 m-2">
                <div className="w-3/4 bg-gray-400 p-3 h-screen overflow-y-auto">
                    <FeaturedListings />
                </div>
                <div className="bg-blue-300 sticky top-0 h-screen">
                    <p>Agent detail section</p>
                </div>

            </section>
        </>
    );
}