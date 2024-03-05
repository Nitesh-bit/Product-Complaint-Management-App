export default function Product({
  product,
  setComplaint,
  selectedProduct,
  displayComplaint,
}) {
  return (
    <div className="product">
      <img className="product-img" src={product.img} alt="product-image" />
      <div className="inner">
        <p>{product.name}</p>
        <h2>by - {product.username}</h2>
      </div>
      <Button product={product} setComplaint={setComplaint}>
        {selectedProduct?.id === product.id && displayComplaint
          ? "Close"
          : "Select"}
      </Button>
    </div>
  );
}

function Button({ product, setComplaint, children }) {
  return (
    <button className="selectBtn" onClick={() => setComplaint(product)}>
      {children}
    </button>
  );
}
