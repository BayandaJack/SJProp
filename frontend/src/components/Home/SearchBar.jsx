export default function SearchBar(){
    return (
        <div className="flex flex-row bg-white rounded-lg m-2">
            <img src="/search-icon.jpg" alt="search icon" className="rounded-lg w-10"/>
            <input type="text" placeholder="Enter place here" className="text-gray-500"/>
            <button className="rounded-sm bg-red-500 items-center hover:cursor-pointer" type="submit">Search</button>
        </div>
    );
}