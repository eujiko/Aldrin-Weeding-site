import { useEffect, useRef } from "react";
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

  return (
    <section
      id="story"
      className="relative w-full min-h-screen bg-cover bg-center py-16 px-6 overflow-hidden"
      style={{ backgroundImage: `url(${bgStory})` }}
    >
      {/* Liquid blobs behind */}
      {/* <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div> */}

      {/* Overlay for readability */}
      {/* <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div> */}

      {/* Content wrapped in liquid background */}
      <div className="relative max-w-6xl mx-auto">
        <div
          className="
           relative z-10
           bg-white/20 backdrop-blur-2xl
           rounded-3xl p-8 sm:p-12 md:p-16
           border border-white/40
           shadow-[0_8px_32px_rgba(0,0,0,0.25)]
           transition-transform duration-300 ease-in-out
           hover:scale-[1.02]
          "
        >
          <h2
            ref={titleRef}
            className="opacity-0 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-center text-[#653720] mb-12"
          >
            Our Story
          </h2>

          {/* First Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 md:mb-24">
            <div className="md:w-1/2 md:pl-8 flex justify-center">
              <img
                ref={imgLeftRef}
                src={story2}
                alt="Our Beginning"
                className="opacity-0 w-full max-w-lg h-auto rounded-3xl shadow-xl object-cover transition duration-700 ease-in-out hover:scale-105"
              />
            </div>
            <div
              ref={textRightRef}
              className="opacity-0 md:w-1/2 text-center md:text-left space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-wedding text-[#8daabb] mb-4">
                How We Met
              </h3>
              <p className="font-garamond font-light text-[#8daabb] text-base sm:text-lg leading-relaxed">
                Aldrin and Jessa’s love story began on a beautiful, 
                starry night during a spontaneous blessing at the home of a close family friend. 
                In that moment, the planets, fate, and stars seemed to align—bringing them to the same place, 
                at the same time, for a reason neither could yet imagine.
              </p>
              <p className="font-garamond font-light text-[#8daabb] text-base sm:text-lg leading-relaxed">
                What started as a simple conversation about life and careers quickly grew into something deeper.
                With every shared laugh, late-night talk, and meaningful moment,
                their connection blossomed into an undeniable connection.
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
                className="opacity-0 w-full max-w-lg h-auto rounded-3xl shadow-xl object-cover transition duration-700 ease-in-out hover:scale-105"
              />
            </div>
            <div
              ref={textLeftRef}
              className="opacity-0 md:w-1/2 text-center md:text-left"
            >
              <h3 className="text-2xl sm:text-3xl font-wedding text-[#8daabb] mb-4">
                Our Journey
              </h3>
              <p className="font-garamond font-light text-[#8daabb] text-base sm:text-lg leading-relaxed">
               On August 24, 2025, surrounded by the love and presence of their families, 
               Aldrin asked Jessa a question that would change their lives forever. With joyful hearts,
               they celebrated a moment that marked the beginning of their forever. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
