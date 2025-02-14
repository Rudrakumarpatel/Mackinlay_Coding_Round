import { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../api/api";
import React from "react";

const Home = () => {
    const [products, setProducts] = useState([]);

    const handleSearch = async (query, category) => {
        const data = await fetchProducts(query, category);
        setProducts(data);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Product Search</h1>
            <SearchFilter onSearch={handleSearch} />
            <ProductList products={products} />
        </div>
    );
};

export default Home;
