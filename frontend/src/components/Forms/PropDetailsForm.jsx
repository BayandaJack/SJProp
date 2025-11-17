import { useState } from "react";

export default function PropDetailsForm(){
    const [images, setImages] = useState([]);

    function handleFileChange(e) {
        setImages([...e.target.files]);
    }


    return (
        <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Post a Property</h1>

        <form className="space-y-6">

            {/* Basic Details */}
            <div>
            <h2 className="text-xl font-semibold mb-2">Basic Details</h2>

            <input
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 border rounded-md"
            />

            <textarea
                placeholder="Description"
                className="w-full px-4 py-2 border rounded-md mt-3"
                rows="4"
            />

            <select className="w-full px-4 py-2 border rounded-md mt-3">
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="townhouse">Townhouse</option>
            </select>
            </div>

            {/* Features */}
            <div>
            <h2 className="text-xl font-semibold mb-2">Features</h2>

            <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Bedrooms" className="px-4 py-2 border rounded-md" />
                <input type="number" placeholder="Bathrooms" className="px-4 py-2 border rounded-md" />
                <input type="number" placeholder="Garages" className="px-4 py-2 border rounded-md" />
                <input type="number" placeholder="Size (m²)" className="px-4 py-2 border rounded-md" />
            </div>

            <label className="flex items-center gap-2 mt-3">
                <input type="checkbox" className="w-4 h-4" />
                Pool?
            </label>

            <input
                type="number"
                placeholder="Price (R)"
                className="w-full px-4 py-2 border rounded-md mt-3"
            />
            </div>

            {/* Image Uploading */}
            <div>
            <h2 className="text-xl font-semibold mb-2">Property Images</h2>

            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="border p-2 rounded-md w-full"
            />

            {/* Preview */}
            {images.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-3">
                {images.map((img, index) => (
                    <img
                    key={index}
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    className="h-24 w-full object-cover rounded"
                    />
                ))}
                </div>
            )}
            </div>

            {/* Submit */}
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:cursor-pointer">
            Post Property
            </button>

        </form>
        </div>
    );
}