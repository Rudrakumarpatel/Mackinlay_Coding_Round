import { useState } from "react";

const SearchFilter = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");

    const handleSearch = () => {
        onSearch(query, category);
    };

    return (
        <div className="flex gap-4 mb-4">
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2 rounded w-1/2"
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 rounded"
            >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Stationery">Stationery</option>
            </select>
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Search
            </button>
        </div>
    );
};

export default SearchFilter;
