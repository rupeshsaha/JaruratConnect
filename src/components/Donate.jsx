import React, { useEffect, useState } from "react";

const Donate = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    email: "",
    isMonthly: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAmountSelection = (amount) => {
    setFormData({ ...formData, amount });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!formData.amount) {
      alert("Please select or enter a donation amount.");
      return;
    }
    try {
      const response = await fetch("https://retoolapi.dev/oG2L3C/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Thank you for your donation!");
        setFormData({
          amount: "",
          fullName: "",
          email: "",
          isMonthly: false,
        });
      } else {
        alert("Donation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your donation.");
    }
  };

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">
            Make a Difference Today
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto animate__animated animate__fadeIn">
            Your contribution helps us provide essential resources to those in
            need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            {/* Impact & Why Donate Sections */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Impact of Your Donation
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-neutral-700">
                    $10 provides a day's meals for a family
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-neutral-700">
                    $50 supplies educational materials for a student
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-neutral-700">
                    $100 provides medical assistance to those in need
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Why Donate?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-neutral-700">
                    100% of donations go directly to helping those in need
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-neutral-700">
                    Tax-deductible contributions
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-neutral-700">
                    Regular updates on how your donation is making an impact
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl animate__animated animate__fadeInRight">
            <form id="donationForm" className="space-y-6" onSubmit={submitHandler}>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {["10", "50", "100"].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`donation-amount-btn ${
                        formData.amount === amount
                          ? "bg-blue-600"
                          : "bg-neutral-800 hover:bg-blue-600"
                      } text-white py-3 rounded-lg transition-colors duration-300`}
                      onClick={() => handleAmountSelection(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    $
                  </span>
                  <input
                    type="number"
                    name="amount"
                    placeholder="Custom amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full pl-8 pr-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  name="isMonthly"
                  id="monthly"
                  checked={formData.isMonthly}
                  onChange={handleChange}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="monthly" className="text-white">
                  Make this a monthly donation
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300"
              >
                Donate Now
              </button>

              <div className="flex items-center justify-center space-x-4 pt-4">
                <svg className="h-8" viewBox="0 0 36 24" fill="none">
                  <rect width="36" height="24" rx="4" fill="#252525" />
                  <path
                    d="M10.755 18h-2.134L6.847 8.835H8.98l1.177 6.387h.082l1.403-6.387h2.074l1.403 6.387h.082l1.177-6.387h2.134L16.737 18h-2.134l-1.424-6.325h-.082L11.673 18h-.918z"
                    fill="white"
                  />
                  <path
                    d="M20.5 18.123c-1.28 0-2.316-.41-3.108-1.23-.792-.82-1.188-1.91-1.188-3.272 0-1.362.396-2.453 1.188-3.272.792-.82 1.828-1.23 3.108-1.23 1.28 0 2.316.41 3.108 1.23.792.82 1.188 1.91 1.188 3.272 0 1.362-.396 2.453-1.188 3.272-.792.82-1.828 1.23-3.108 1.23zm0-1.845c.656 0 1.177-.246 1.562-.738.385-.492.577-1.148.577-1.968 0-.82-.192-1.476-.577-1.968-.385-.492-.906-.738-1.562-.738-.656 0-1.177.246-1.562.738-.385.492-.577 1.148-.577 1.968 0 .82.192 1.476.577 1.968.385.492.906.738 1.562.738z"
                    fill="white"
                  />
                  <path
                    d="M29.5 18.123c-1.28 0-2.316-.41-3.108-1.23-.792-.82-1.188-1.91-1.188-3.272 0-1.362.396-2.453 1.188-3.272.792-.82 1.828-1.23 3.108-1.23 1.28 0 2.316.41 3.108 1.23.792.82 1.188 1.91 1.188 3.272 0 1.362-.396 2.453-1.188 3.272-.792.82-1.828 1.23-3.108 1.23zm0-1.845c.656 0 1.177-.246 1.562-.738.385-.492.577-1.148.577-1.968 0-.82-.192-1.476-.577-1.968-.385-.492-.906-.738-1.562-.738-.656 0-1.177.246-1.562.738-.385.492-.577 1.148-.577 1.968 0 .82.192 1.476.577 1.968.385.492.906.738 1.562.738z"
                    fill="white"
                  />
                </svg>
                <svg className="h-8" viewBox="0 0 36 24" fill="none">
                  <rect width="36" height="24" rx="4" fill="#252525" />
                  <path
                    d="M14.5 18h-2v-3h-3v3h-2V9h2v4h3V9h2v9zm4-9c.667 0 1.167.167 1.5.5.333.333.5.833.5 1.5V18h-2v-5.5c0-.333-.083-.583-.25-.75-.167-.167-.417-.25-.75-.25s-.583.083-.75.25c-.167.167-.25.417-.25.75V18h-2V9h2v1c.2-.333.483-.583.85-.75.367-.167.767-.25 1.2-.25h-.05zm8 0c.667 0 1.167.167 1.5.5.333.333.5.833.5 1.5V18h-2v-5.5c0-.333-.083-.583-.25-.75-.167-.167-.417-.25-.75-.25s-.583.083-.75.25c-.167.167-.25.417-.25.75V18h-2V9h2v1c.2-.333.483-.583.85-.75.367-.167.767-.25 1.2-.25h-.05z"
                    fill="white"
                  />
                </svg>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
