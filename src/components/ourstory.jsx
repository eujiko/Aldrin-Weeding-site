import { useEffect, useRef, useState } from "react";
import story1 from "../assets/couple-photo/p12.jpeg";
import story2 from "../assets/couple-photo/p13.jpg";
import bgStory from "../assets/images/bg-s.jpg";

// Hook for scroll-triggered animation
function useScrollAnimation(animationClass) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(animationClass);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [animationClass]);
  return ref;
}

export default function OurStory() {
  const titleRef = useScrollAnimation("animate-fadeInUp");
  const imgLeftRef = useScrollAnimation("animate-fadeInLeft");
  const textRightRef = useScrollAnimation("animate-fadeInRight");
  const imgRightRef = useScrollAnimation("animate-fadeInRight");
  const textLeftRef = useScrollAnimation("animate-fadeInLeft");

  const [openPhoto, setOpenPhoto] = useState(null);

  return (
    <section
      id="story"
      className="relative w-full min-h-screen bg-cover bg-center py-12 sm:py-16 px-4 sm:px-6 overflow-hidden"
      style={{ backgroundImage: `url(${bgStory})` }}
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="relative z-10 bg-white/20 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 md:p-16 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
          <h2
            ref={titleRef}
            className="opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-[#653720] mb-8 sm:mb-12"
          >
            Our Story
          </h2>

          {/* First Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 md:mb-20">
            <div className="md:w-1/2 flex justify-center">
              <img
                ref={imgLeftRef}
                src={story2}
                alt="Our Beginning"
                onClick={() => setOpenPhoto(story2)}
                className="cursor-pointer opacity-0 w-full max-w-sm sm:max-w-md md:max-w-lg h-auto rounded-3xl shadow-xl object-cover transition duration-700 ease-in-out hover:scale-105"
              />
            </div>
            <div
              ref={textRightRef}
              className="opacity-0 md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-wedding text-[#8daabb] mb-2 sm:mb-4">
                How We Met
              </h3>
              <p className="font-garamond font-light text-[#103659] text-sm sm:text-base md:text-lg leading-relaxed">
               Aldrin and Jessa’s love story began on a beautiful, 
               starry night during a spontaneous blessing at the home of a close family friend. 
               In that moment, the planets, fate, and stars seemed to align—bringing them to the same place,
               at the same time, for a reason neither could yet imagine.
              </p>
              <p className="font-garamond font-light text-[#103659] text-sm sm:text-base md:text-lg leading-relaxed">
                What started as a simple conversation about life and careers quickly grew into something deeper.
                With every shared laugh, late-night talk, and meaningful moment, their connection blossomed into an undeniable connection.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6">
            <div className="md:w-1/2 flex justify-center">
              <img
                ref={imgRightRef}
                src={story1}
                alt="Our Journey"
                onClick={() => setOpenPhoto(story1)}
                className="cursor-pointer opacity-0 w-full max-w-sm sm:max-w-md md:max-w-lg h-auto rounded-3xl shadow-xl object-cover transition duration-700 ease-in-out hover:scale-105"
              />
            </div>
            <div
              ref={textLeftRef}
              className="opacity-0 md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-wedding text-[#8daabb] mb-2 sm:mb-4">
                Our Journey
              </h3>
              <p className="font-garamond font-light text-[#103659] text-sm sm:text-base md:text-lg leading-relaxed">
                On August 24, 2025, surrounded by the love and presence of their families, 
                Aldrin asked Jessa a question that would change their lives forever. With joyful hearts, 
                they celebrated a moment that marked the beginning of their forever. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openPhoto && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          {/* Close button anchored to viewport */}
          <button
            onClick={() => setOpenPhoto(null)}
            className="
        fixed top-4 right-4
        flex items-center justify-center
        w-10 h-10
        rounded-full
        bg-white/20 backdrop-blur-md
        text-white text-xl font-bold
        shadow-lg
        transition duration-300
        hover:bg-white/30 hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-white/50
      "
            aria-label="Close"
          >
            ✕
          </button>

          {/* Image container */}
          <div className="relative max-w-3xl w-full px-4">
            <img
              src={openPhoto}
              alt="Expanded view"
              className="w-full h-auto rounded-xl shadow-2xl object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
