import { useState } from "react";
import ComplaintWindow from "./components/ComplaintWindow";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import products from "./products";

function App() {
  const [displayComplaint, setDisplayComplaint] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleDisplayComplaint(product) {
    setDisplayComplaint((prev) => !prev);
    setSelectedProduct(product);
  }
  return (
    <>
      <Header />
      <div className="app">
        <ProductListing
          products={products}
          setComplaint={handleDisplayComplaint}
          selectedProduct={selectedProduct}
          displayComplaint={displayComplaint}
        />
        <ComplaintWindow
          displayComplaint={displayComplaint}
          product={selectedProduct}
        />
      </div>
    </>
  );
}

export default App;
