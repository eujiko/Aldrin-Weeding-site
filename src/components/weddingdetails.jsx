// src/components/WeddingDetails.jsx
import React from "react";
import dressImage from "../assets/images/dress-code.png";
import venue from "../assets/images/venue.jpg";
import detailsBg from "../assets/images/story-bg.jpg"

export default function WeddingDetails() {
  return (
    <section
      id="details"
      className="relative w-full py-20 text-gray-800 " // ✅ plain background color
      style={{
      backgroundImage: `url(${detailsBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
  }}


    >
      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section 1: Ceremony */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#8daabb]">
            Wedding Ceremony
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            March 8, 2026 | 3:30 PM
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Somewhere in Zamboanga del Norte you can find it if you're big
            enough!
          </p>

          {/* Google Maps iframe */}
          <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Wedding Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.1234567890!2d123.4520327!3d8.4832485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3254ecda56c06b43%3A0x36f820792be0dd14!2sManuel+Resort!5e0!3m2!1sen!2sph!4v1234567890"
              width="100%"
              height="300"
              className="border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Section 2: Reception */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#653720]">
            Wedding Reception
          </h2>
          {/* <p className="text-lg sm:text-xl text-gray-700">
            March 8, 2026 | 6:00 PM
          </p> */}

          {/* Carousel Wrapper */}
          <div className="relative w-full overflow-hidden">
            <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-6">
              {/* Card 1: Venue */}
              <div
                className="snap-center flex-shrink-0 w-72 bg-white rounded-xl shadow-lg p-6 
                      transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-[#653720] mb-2">Venue</h3>
                <img
                  src={venue} // ✅ replace with your venue image path
                  alt="Wedding Venue"
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <p className="text-gray-700 text-sm">
                  Grand Ballroom, Manuel's Resort, Piñan, Zamboanga del Norte
                </p>
              </div>

              {/* Card 2: Dress Code */}
              <div
                className="snap-center flex-shrink-0 w-72 bg-white rounded-xl shadow-lg p-6 
                      transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-[#653720] mb-2">
                  Dress Code
                </h3>
                <p className="text-gray-700 italic mb-4">
                  Elegant/Formal – Ladies: Long or cocktail dresses | Gentlemen:
                  Suit or tuxedo
                </p>
                <div className="flex justify-center space-x-2">
                  {["#798da2", "#9cb7d2", "#9b5e3e", "#b27d5e", "#f8f7ef"].map(
                    (color, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-125"
                        style={{ backgroundColor: color }}
                      ></div>
                    )
                  )}
                </div>
              </div>

              {/* Card 3: Inspiration */}
              <div
                className="snap-center flex-shrink-0 w-72 bg-white rounded-xl shadow-lg p-6 
                      transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-[#653720] mb-2">
                  Inspiration
                </h3>
                <img
                  src={dressImage}
                  alt="Dress Example"
                  className="w-full h-48 object-contain rounded-lg"
                />
                <p className="text-gray-600 mt-2 text-sm">
                  A glimpse of the elegant vibe we’re going for ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
