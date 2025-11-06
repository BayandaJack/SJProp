import FeaturedListings from "../components/Home/FeaturedListings";
import HeroBanner from "../components/Home/HeroBanner";
import WhyChooseUs from "../components/Home/WhyChooseUs";


export default function Home(){
    return (
        <>
            <HeroBanner />
            <FeaturedListings />
            <WhyChooseUs />
        </>
    );
}