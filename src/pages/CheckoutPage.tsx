// src/pages/CheckoutPage.tsx
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";

// Replace with your Stripe publishable key
const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXX");

export function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const total = cart
    .reduce((sum, item) => sum + parseFloat(item.price), 0)
    .toFixed(2);

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleSuccess = () => {
    clearCart();
    navigate("/"); // redirect after payment
  };

  const paymentOptions = [
    { id: "paypal", label: "PayPal", logo: "/paypal1.png" },
    { id: "stripe", label: "Stripe", logo: "/stripe.png" },
    { id: "mastercard", label: "Mastercard", logo: "/mastercard.png" },
    { id: "visa", label: "Visa", logo: "/visa.png" },
    { id: "creditcard", label: "Credit Card", logo: "/creditcard.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden space-y-8">
        <h2 className="text-3xl font-serif text-center py-6 border-b">
          Checkout
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Shipping & Cart Summary */}
          <div className="lg:w-2/3 flex flex-col gap-6 p-6 border-r border-gray-200">
            {/* Shipping Form */}
            <div className="bg-gray-50 p-4 rounded shadow-sm space-y-4">
              <h3 className="text-xl font-medium mb-2">
                Shipping Information
              </h3>
              <input
                name="name"
                value={shipping.name}
                onChange={handleShippingChange}
                placeholder="Full Name"
                className="w-full border rounded px-3 py-2"
              />
              <input
                name="email"
                value={shipping.email}
                onChange={handleShippingChange}
                placeholder="Email"
                type="email"
                className="w-full border rounded px-3 py-2"
              />
              <input
                name="address"
                value={shipping.address}
                onChange={handleShippingChange}
                placeholder="Address"
                className="w-full border rounded px-3 py-2"
              />
              <div className="flex gap-2">
                <input
                  name="city"
                  value={shipping.city}
                  onChange={handleShippingChange}
                  placeholder="City"
                  className="flex-1 border rounded px-3 py-2"
                />
                <input
                  name="zip"
                  value={shipping.zip}
                  onChange={handleShippingChange}
                  placeholder="ZIP"
                  className="flex-1 border rounded px-3 py-2"
                />
              </div>
              <input
                name="country"
                value={shipping.country}
                onChange={handleShippingChange}
                placeholder="Country"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Cart Summary */}
            <div className="bg-white p-4 rounded shadow-sm flex-1 overflow-y-auto max-h-96">
              <h3 className="text-xl font-medium mb-4">Your Items</h3>
              {cart.length === 0 && (
                <p className="text-gray-500">Your cart is empty.</p>
              )}
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4 border-b pb-2"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <p className="font-medium">${item.price}</p>
                </div>
              ))}
              <div className="text-right mt-4 font-semibold text-lg">
                Total: ${total}
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="lg:w-1/3 p-6 space-y-6">
            <h3 className="text-xl font-medium mb-4">Payment Method</h3>

            {/* Payment options buttons */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {paymentOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setPaymentMethod(option.id)}
                  className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer transition hover:shadow-md ${
                    paymentMethod === option.id
                      ? "border-black bg-gray-50 shadow-md"
                      : ""
                  }`}
                >
                  <img
                    src={option.logo}
                    alt={option.label}
                    className="w-12 h-12 object-contain mb-1"
                  />
                  <span className="text-xs font-medium">{option.label}</span>
                </div>
              ))}
            </div>

            {/* Payment Forms */}
            <div className="space-y-4">
              {/* PayPal */}
              {paymentMethod === "paypal" && (
                <div className="bg-gray-50 p-4 rounded shadow-sm space-y-3">
                  <h4 className="font-medium text-gray-700">Pay with PayPal</h4>
                  <PayPalScriptProvider
                    options={{ clientId: "YOUR_PAYPAL_CLIENT_ID" }}
                  >
                    <PayPalButtons
                      style={{
                        layout: "vertical",
                        color: "blue",
                        shape: "rect",
                        label: "paypal",
                      }}
                      createOrder={(_data, actions) =>
                        actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [
                            { amount: { currency_code: "USD", value: total } },
                          ],
                        })
                      }
                      onApprove={async (_data, actions) => {
                        const details = await actions.order!.capture();
                        alert(
                          `Payment completed by ${
                            details.payer?.name?.given_name ?? "Unknown"
                          }`
                        );
                        handleSuccess();
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              )}

              {/* Stripe / Credit Card */}
              {["stripe", "mastercard", "visa", "creditcard"].includes(
                paymentMethod
              ) && (
                <div className="bg-gray-50 p-4 rounded shadow-sm space-y-4">
                  <h4 className="font-medium text-gray-700">Pay with Card</h4>
                  <Elements stripe={stripePromise}>
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        alert(`Payment of $${total} completed successfully!`);
                        handleSuccess();
                      }}
                      className="space-y-3"
                    >
                      <input
                        type="text"
                        placeholder="Cardholder Name"
                        required
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                      <div className="p-3 border rounded-lg">
                        <CardElement options={{ hidePostalCode: true }} />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          required
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="CVC"
                          required
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Postal / ZIP Code"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Pay ${total}
                      </button>
                    </form>
                  </Elements>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
