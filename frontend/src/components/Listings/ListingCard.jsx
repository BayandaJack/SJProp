import ListingsDetails from "./ListingsDetails";
import ListingsImage from "./ListingsImage";

export default function ListingsCard({listing}){

    const listingdetails = {
        id: listing._id,
        title: listing.title,
        price: listing.price,
        bedrooms: listing.features.bedrooms,
        bathrooms: listing.features.bathrooms,
        size: listing.features.size
    }

    return (
        <div className="flex flex-row m-4 gap-2 bg-blue-50 border-amber-700 border w-full rounded-md p-4">
            <ListingsImage />
            <ListingsDetails key={listing._id} listingdetails={listingdetails}/>
        </div>
    );
}