import HeroBanner from "../components/Home/HeroBanner";

export default function Home() {
    return (
        <div className="bg-white min-h-screen w-full">
            {/* Hero Banner with image and search */}
            <HeroBanner />

            {/* Welcome Section */}
            <section className="flex flex-col items-center justify-center py-10 px-4 md:px-20 bg-red-50">
                <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-4 text-center">Welcome to SJ Properties</h2>
                <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-6">
                    Discover a new way to find your perfect property. SJ Properties offers a seamless experience, expert advice, and a wide range of listings to help you buy, sell, rent, or invest with confidence.
                </p>
            </section>
            
        </div>
    );
}