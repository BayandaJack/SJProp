import ListingsDetails from "./ListingsDetails";
import ListingsImage from "./ListingsImage";

export default function ListingsCard({listing}){

    const listingdetails = {
        id: listing.id,
        title: listing.title,
        price: listing.price,
        bedrooms: listing.bedrooms,
        bathrooms: listing.bathrooms,
        size: listing.size
    }

    return (
        <div className="flex flex-row m-4 gap-2 bg-blue-50 border-amber-700 border w-full rounded-md p-4">
            <ListingsImage key={listing.id} pic={listing.image}/>
            <ListingsDetails key={listing.id} listingdetails={listingdetails}/>
        </div>
    );
}