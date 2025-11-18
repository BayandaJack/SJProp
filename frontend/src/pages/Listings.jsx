import ListingsCard from "../components/Listings/ListingCard";
import FeaturedListings from "../components/Home/FeaturedListings";

export default function Listings() {
    return (
        <div className="bg-white min-h-screen py-10 px-4 md:px-20">
            {/* Header & Intro */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-red-600 mb-2">Browse Our Listings</h1>
                <p className="text-lg text-gray-700">Find your next home, investment, or rental from our curated selection of properties.</p>
            </div>

            <section className="flex flex-col md:flex-row gap-4">
                {/* Filter/Search Sidebar */}
                <aside className="md:w-1/5 bg-gray-50 rounded-lg shadow p-6 mb-8 md:mb-0 h-fit sticky top-10">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Filter Listings</h2>
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Search by location" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                        <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
                            <option>Property Type</option>
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Townhouse</option>
                            <option>Commercial</option>
                        </select>
                        <input type="number" placeholder="Min Price" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                        <input type="number" placeholder="Max Price" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                        <button type="submit" className="bg-red-500 text-white font-bold py-2 rounded hover:bg-red-600 transition">Apply Filters</button>
                    </form>
                </aside>

                {/* Listings & Agent Section */}
                <div className="md:w-4/5 flex flex-col gap-8">
                    <div className="bg-gray-100 rounded-lg shadow p-6 overflow-y-auto">
                        <FeaturedListings />
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6 items-center">
                        <img src="/agent.png" alt="Agent" className="w-24 h-24 rounded-full object-cover border-2 border-red-500" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Meet Your Agent</h3>
                            <p className="text-gray-700 mb-2">Samson Jack</p>
                            <p className="text-gray-600 text-sm mb-2">Expert in residential and commercial properties. Ready to help you find your perfect match!</p>
                            <a href="/contact" className="bg-red-500 text-white font-bold py-1 px-4 rounded hover:bg-red-600 transition">Contact Agent</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}