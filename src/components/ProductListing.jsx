import Product from "./Product";

export default function ProductListing({
  products,
  setComplaint,
  selectedProduct,
  displayComplaint,
}) {
  return (
    <div className="product-list">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            setComplaint={setComplaint}
            selectedProduct={selectedProduct}
            displayComplaint={displayComplaint}
          />
        );
      })}
    </div>
  );
}
