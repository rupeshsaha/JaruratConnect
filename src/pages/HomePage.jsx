import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Donate from "../components/Donate";
import Testimonial from "../components/Testimonial";
import Volunteer from "../components/Volunteer";
import Help from "../components/Help";
import Resource from "../components/Resource";

const HomePage = () => {
 
  return (
    <>
      <section id="home" className="min-h-[70vh] bg-neutral-900 text-white pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="grid md:grid-cols-2 gap-8 items-center py-16">
            <div className="  __fadeInLeft">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Connecting Hearts, <br />
                <span className="text-blue-500">Building Hope</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Bridging the gap between resources and needs - providing
                education, healthcare, and nutrition to those who need it most.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#seek-help"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300   __pulse  __infinite"
                >
                  Seek Help
                </a>
                <a
                  href="#donate"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-neutral-900 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Donate Now
                </a>
              </div>
            </div>

            <div className="relative   __fadeInRight">
              <div className="bg-blue-500 absolute -inset-4 blur-lg opacity-20 rounded-full"></div>
              <div className="relative bg-neutral-800 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-neutral-700 rounded-lg">
                    <h3 className="text-3xl font-bold text-blue-500 mb-2">
                      1000+
                    </h3>
                    <p className="text-gray-300">Lives Impacted</p>
                  </div>
                  <div className="p-4 bg-neutral-700 rounded-lg">
                    <h3 className="text-3xl font-bold text-blue-500 mb-2">
                      50+
                    </h3>
                    <p className="text-gray-300">Communities</p>
                  </div>
                  <div className="p-4 bg-neutral-700 rounded-lg">
                    <h3 className="text-3xl font-bold text-blue-500 mb-2">
                      24/7
                    </h3>
                    <p className="text-gray-300">Support</p>
                  </div>
                  <div className="p-4 bg-neutral-700 rounded-lg">
                    <h3 className="text-3xl font-bold text-blue-500 mb-2">
                      100%
                    </h3>
                    <p className="text-gray-300">Commitment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-neutral-900 mb-4  ">Our Mission</h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto  ">Bridging gaps and transforming lives through sustainable resource distribution and community empowerment.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-blue-50 rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300  ">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">Education</h3>
          <p className="text-neutral-600">Providing access to quality education and learning resources to empower future generations.</p>
        </div>

        <div className="bg-red-50 rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300  ">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">Healthcare</h3>
          <p className="text-neutral-600">Ensuring essential medical resources reach those in need for a healthier community.</p>
        </div>

        <div className="bg-green-50 rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300  " >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">Nutrition</h3>
          <p className="text-neutral-600">Fighting hunger through sustainable food distribution and nutritional support programs.</p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto  ">Our commitment extends beyond immediate relief - we're building sustainable solutions for lasting change.</p>
        <a href="#impact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
          See Our Impact
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>

  <section id="impact" className="py-20 bg-neutral-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4  __ d  __fadeIn">Our Impact in Numbers</h2>
        <p className="text-xl text-gray-300  __ d  __fadeIn">Every number represents a life changed, a dream supported, and hope restored.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-neutral-800 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300  __ d  __fadeInUp">
          <div className="counter-wrapper mb-4">
            <span className="text-5xl font-bold text-blue-500 ">50000</span>
            <span className="text-5xl font-bold text-blue-500">+</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Meals Served</h3>
          <p className="text-gray-400">Nutritious meals provided to families in need</p>
        </div>

        <div className="bg-neutral-800 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300  __ d  __fadeInUp" >
          <div className="counter-wrapper mb-4">
            <span className="text-5xl font-bold text-red-500 " >1000</span>
            <span className="text-5xl font-bold text-red-500">+</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Medical Camps</h3>
          <p className="text-gray-400">Free healthcare services provided</p>
        </div>

        <div className="bg-neutral-800 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 " >
          <div className="counter-wrapper mb-4">
            <span className="text-5xl font-bold text-green-500 counter" >5000</span>
            <span className="text-5xl font-bold text-green-500">+</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Students Supported</h3>
          <p className="text-gray-400">Children receiving educational support</p>
        </div>

        <div className="bg-neutral-800 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 " >
          <div className="counter-wrapper mb-4">
            <span className="text-5xl font-bold text-yellow-500 counter" >100</span>
            <span className="text-5xl font-bold text-yellow-500">+</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Communities</h3>
          <p className="text-gray-400">Local communities impacted</p>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-neutral-700">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div  >
            <h4 className="text-2xl font-bold mb-2">95%</h4>
            <p className="text-gray-400">Resources directly reaching beneficiaries</p>
          </div>
          <div  >
            <h4 className="text-2xl font-bold mb-2">24/7</h4>
            <p className="text-gray-400">Support available for emergencies</p>
          </div>
          <div >
            <h4 className="text-2xl font-bold mb-2">500+</h4>
            <p className="text-gray-400">Active volunteers nationwide</p>
          </div>
        </div>
      </div>
    </div>
  </section>

    <Resource/>
    <Help/>
    <Volunteer/>
    <Testimonial/>
    <Donate/>
    </>
  );
};

export default HomePage;
