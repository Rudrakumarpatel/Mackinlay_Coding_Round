const ProductList = ({ products }) => {
  return (
      <ul className="border p-4 rounded bg-gray-100">
          {products.length === 0 ? (
              <p>No products found</p>
          ) : (
              products.map((product) => (
                  <li key={product.id} className="p-2 border-b">
                      {product.name}
                  </li>
              ))
          )}
      </ul>
  );
};

export default ProductList;
