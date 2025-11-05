export default function SearchBar(){
    return (
        <div className="flex items-center bg-white rounded-lg m-2 w-full max-w-md overflow-hidden">
            <img src="/search-icon.jpg" alt="search icon" className="rounded-lg w-[12%]"/>
            <input type="text" placeholder="Enter place here" className="grow p-2 text-gray-600 focus:outline-none w-full"/>
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 hover:cursor-pointer h-full" type="submit">Search</button>
        </div>
    );
}