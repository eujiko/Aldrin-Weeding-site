import { useState, useRef, useEffect } from "react";
import landingPhoto from "../assets/images/landing2.jpg";

export default function Landing() {
  const [open, setOpen] = useState(false);
  const iframeRef = useRef(null);

  // Auto-close modal when Google Form thank-you page loads
  useEffect(() => {
    if (!open || !iframeRef.current) return;

    const checkFormSubmission = () => {
      try {
        const iframeDoc =
          iframeRef.current.contentDocument ||
          iframeRef.current.contentWindow.document;
        if (
          iframeDoc &&
          iframeDoc.body.innerText.includes("Your response has been recorded")
        ) {
          setOpen(false); // close modal
        }
      } catch (err) {
        // Cross-origin iframe blocks direct access, so fallback is manual close
      }
    };

    const interval = setInterval(checkFormSubmission, 1500);
    return () => clearInterval(interval);
  }, [open]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={landingPhoto}
          alt="Wedding background"
          className="w-full h-full object-cover animate-fadeInUp"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Falling Petals Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute left-1/4 w-4 h-4 bg-[#8daabb] rounded-full blur-sm animate-petalFall"></span>
        <span className="absolute left-2/3 w-3 h-3 bg-rose-300 rounded-full blur-sm animate-petalFall delay-500"></span>
        <span className="absolute left-1/2 w-5 h-5 bg-[#8daabb] rounded-full blur-sm animate-petalFall delay-1000"></span>
        {/* … keep your extra petals here … */}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-wedding text-white mb-6 animate-floatUp">
          Aldrin & Jessa
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl italic text-white/90 mb-10 animate-fadeInUp delay-300">
          “Two souls, one heart, united forever in love.”
        </p>

        {/* RSVP Button */}
        <button
          onClick={() => setOpen(true)}
          className="inline-block px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/20 transition bg-gradient-to-r from-white/20 via-white/60 to-white/20 bg-[length:200%_100%] animate-shimmer"
        >
          RSVP Now
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-2xl relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <iframe
              ref={iframeRef}
              src="https://docs.google.com/forms/d/e/1FAIpQLSfoXgg6Wj3WXbd6nAoI9tkR9B3bDVIZ3NYiLM0olYYcycW2Hw/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              className="rounded-b-lg"
              title="RSVP Form" // <-- add this line
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
