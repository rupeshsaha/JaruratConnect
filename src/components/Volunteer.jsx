import React, { useEffect, useState } from "react";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
  });

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent form's default behavior
    try {
      const response = await fetch("https://retoolapi.dev/kGCORA/voluntee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          interest: "",
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the application.");
    }
  };

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">
            Join Our Volunteer Team
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto animate__animated animate__fadeIn">
            Make a difference in your community by joining our network of
            dedicated volunteers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Volunteer Steps */}
          {/* Same as before, no changes needed */}
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white animate__animated animate__fadeInLeft">
              <h3 className="text-3xl font-bold mb-4">Ready to Join Us?</h3>
              <p className="text-gray-300 mb-6">
                Fill out this quick form and we'll get back to you within 24
                hours.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Flexible volunteer hours
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Training provided
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Certificate of volunteering
                </li>
              </ul>
            </div>

            <form
              id="volunteerForm"
              className="bg-white rounded-lg p-6 animate__animated animate__fadeInRight"
              onSubmit={submitHandler}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Areas of Interest *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select area</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="food">Food Distribution</option>
                    <option value="general">General Support</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
