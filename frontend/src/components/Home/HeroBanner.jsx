import SearchBar from "./SearchBar";

export default function HeroBanner(){
    return (
        <section className="relative h-[80vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('/banner.jpeg')" }}>
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 p-3">
                <h1 className="text-4xl font-bold text-red-500">Find Your Dream Home</h1>
                <SearchBar />
            </div>
        </section>
    );
}