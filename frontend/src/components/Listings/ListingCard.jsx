import ListingsImage from "./ListingsImage";

export default function ListingsCard(){


    return (
        <div className="flex flex-row gap-2 bg-blue-50 w-2xl rounded-md p-4">
            <ListingsImage />
            <p>Hey</p>
        </div>
    );
}