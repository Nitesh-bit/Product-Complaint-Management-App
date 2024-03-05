import { useState } from "react";

export default function ComplaintWindow({ displayComplaint, product }) {
  const [value, setValue] = useState("");
  const [customerCaremsg, setCustomerCareMsg] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setValue("");
    setCustomerCareMsg(true);
    product.customerCareMsg = value;
  }

  const msg = "Please select the product complaint.";
  return (
    <div className="complaint-window">
      {displayComplaint ? (
        <div className="product-complaint">
          <div className="product-details">
            <img
              className="product-img-inside"
              src={product.img}
              alt="product-image"
            />
            <h3>{product.name}</h3>
          </div>
          <div className="customer-mesaage">
            <div className="user-msg">
              <p>{product.message}</p>
            </div>
            <div className="userName">- by {product.username}</div>

            {customerCaremsg && product.customerCareMsg && (
              <div className="customer-care-msg">
                <p>{product.customerCareMsg}</p>
              </div>
            )}

            <div className="btns">
              <form onSubmit={handleSubmit}>
                <label>Type your reply:</label>
                <input
                  type="text"
                  placeholder="Your reply..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button className="form-btn">Reply</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        msg
      )}
    </div>
  );
}
