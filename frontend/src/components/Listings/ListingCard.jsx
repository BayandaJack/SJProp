import ListingsDetails from "./ListingsDetails";
import ListingsImage from "./ListingsImage";

export default function ListingsCard(){


    return (
        <div className="flex flex-row m-4 gap-2 bg-blue-50 border-amber-700 border w-5xl rounded-md p-4">
            <ListingsImage />
            <ListingsDetails />
        </div>
    );
}