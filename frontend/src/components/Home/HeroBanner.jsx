import SearchBar from "./SearchBar";

export default function HeroBanner(){
    return (
        <section className="relative h-[80vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('/banner.jpeg')" }}>
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 p-3">
                <h1 className="text-4xl font-bold text-red-500">Find Your Dream Home</h1>
                <a href="https://www.property24.com/for-sale/agency/sj-prop/27908" className="bg-red-500 text-white font-bold py-4 px-6 rounded hover:bg-red-600 transition">Browse Listings</a>
            </div>
        </section>
    );
}