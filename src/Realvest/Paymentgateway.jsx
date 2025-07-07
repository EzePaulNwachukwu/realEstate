import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

function Paymentgateway({amount}) {
  const key = "pk_test_e744ca9c0925b0297ffaf99d851aba6c40e2c44a";
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
//   const [amount, setamount] = useState("");

  const componentProps = {
    email,
    amount: amount * 100, // Paystack expects kobo
    metadata: {
      name,
      phone,
    },
    publicKey: key,
    text: "Buy Now",
    onSuccess: () => alert("✅ Payment successful"),
    onClose: () => alert("❌ Transaction terminated"),
  };

  return (
    <div className="container my-5">
      <div className="card p-4 shadow-lg mx-auto" style={{ maxWidth: '500px' }}>
        <h4 className="text-center mb-4 text-primary">Pay with Paystack</h4>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input value={name} className="form-control" onChange={(e) => setname(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input value={email} type="email" className="form-control" onChange={(e) => setemail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input value={phone} type="tel" className="form-control" onChange={(e) => setphone(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Amount (₦)</label>
          <input defaultValue={amount} type="number" className="form-control"  />
        </div>

        <div className="d-grid">
          <PaystackButton className="btn btn-success" {...componentProps} />
        </div>
      </div>
    </div>
  );
}

export default Paymentgateway;
