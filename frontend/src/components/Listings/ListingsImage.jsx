export default function ListingsImage({ pic }){


    return (
        <div className="rounded-sm">
            <img src={pic} className="w-full max-w-3xl h-full rounded-sm border border-gray-500 shadow-md transform hover:-translate-y-2 hover:cursor-pointer transition duration-300" />
        </div>
    );
}