import { useEffect, useRef } from "react";
import story1 from "../assets/images/sample1.jpg";
import story2 from "../assets/images/sample2.jpg";
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
      className="relative w-full min-h-screen bg-cover bg-center py-16 px-6"
      style={{ backgroundImage: `url(${bgStory})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/30"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="opacity-0 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-center text-[#653720] mb-12"
        >
          Our Story
        </h2>

        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 md:mb-24">
          <div className="md:w-1/2 pl-8 flex justify-center">
            <img
              ref={imgLeftRef}
              src={story2}
              alt="Our Beginning"
              className="opacity-0 w-full max-w-lg h-auto rounded-3xl shadow-xl object-cover transition duration-700 ease-in-out hover:scale-105"
            />
          </div>
          <div
            ref={textRightRef}
            className="opacity-0 md:w-1/2 text-center md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#A2481b] mb-4">
              How We Met
            </h3>
            <p className="font-weddingBody text-[#653720] text-lg sm:text-xl leading-relaxed">
              From the moment our paths crossed, we felt a connection like no
              other. Every laugh, every adventure, every small moment has shaped
              our journey together.
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
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#8daabb] mb-4">
              Our Journey
            </h3>
            <p className="font-weddingBody text-[#653720] text-lg sm:text-xl leading-relaxed">
              Together, we’ve built a life full of joy, growth, and unforgettable
              memories. Every step has brought us closer to this special day we
              will celebrate with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}