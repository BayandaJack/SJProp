import { BedDouble, Bath, Ruler, HandCoins } from 'lucide-react';

export default function ListingsDetails({ listingdetails }){
    return (
        <div className=" flex flex-col items-center justify-center gap-4 p-20 rounded-sm border border-gray-500 w-full">
            <h2 className="text-3xl font-bold">{listingdetails.title}</h2>
            <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                    <HandCoins />
                    R {listingdetails.price}
                </li>
                <li className="flex items-center gap-3">
                    <BedDouble />
                    {listingdetails.bedrooms}
                </li>
                <li className="flex items-center gap-3">
                    <Bath />
                    {listingdetails.bathrooms}
                </li>
                <li className="flex items-center gap-3">
                    <Ruler />
                    {listingdetails.size} sqm
                </li>
            </ul>
        </div>
    );
}

