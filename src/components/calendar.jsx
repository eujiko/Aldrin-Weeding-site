import { useState, useEffect, useMemo, useCallback } from "react";
import story2 from "../assets/couple-photo/p21.jpg";
import bgPhoto from "../assets/images/story-bg.jpg";

export default function Calendar() {
  const weddingDate = useMemo(() => new Date("2026-03-08T00:00:00"), []);

  const getTimeLeft = useCallback(() => {
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [weddingDate]);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [status, setStatus] = useState("countdown");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        setTimeLeft(getTimeLeft());
        setStatus("countdown");
      } else {
        const weddingDayEnd = new Date("2026-03-08T23:59:59");
        setStatus(now <= weddingDayEnd ? "celebration" : "thankyou");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate, getTimeLeft]);

  const year = 2026;
  const month = 2; // March
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  // Modal state for photo
  const [openPhoto, setOpenPhoto] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${bgPhoto})` }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        {/* IMAGE */}
        <div className="flex justify-center w-full">
          <img
            src={story2}
            alt="Our Beginning"
            onClick={() => setOpenPhoto(true)}
            className="
              cursor-pointer
              w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[380px]
              h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] xl:h-[460px]
              object-cover rounded-2xl shadow-lg
              transition-transform duration-300 hover:scale-105
            "
          />
        </div>

        {/* CALENDAR + TIMER */}
        <div className="max-w-md mx-auto w-full">
          <div
            className="
              relative z-10
              bg-white/10 backdrop-blur-xl
              rounded-3xl p-6 sm:p-8 md:p-10
              border border-white/30
              shadow-2xl
              text-center text-[#a2481b]
            "
          >
            <h2 className="text-xl font-semibold mb-4">
              {new Date(year, month).toLocaleString("default", {
                month: "long",
              })}{" "}
              {year}
            </h2>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 text-xs sm:text-sm text-[#a2481b] mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <div key={day} className="text-center">
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-[2px] sm:gap-1 text-center text-xs sm:text-sm">
              {days.map((day, i) => (
                <div
                  key={i}
                  className={`h-8 sm:h-9 md:h-10 flex items-center justify-center rounded
                    ${day === 8 ? "bg-[#8daabb] text-white font-bold" : "text-[#a2481b]"}
                  `}
                >
                  {day || ""}
                </div>
              ))}
            </div>

            {/* TIMER */}
            <div className="mt-6">
              {status === "countdown" && timeLeft && (
                <>
                  <p className="text-sm sm:text-base mb-4 tracking-widest text-[#a2481b]">
                    We are getting married in
                  </p>

                  <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                    {Object.entries(timeLeft).map(([label, value]) => (
                      <div
                        key={label}
                        className="
                          flex flex-col items-center
                          min-w-[60px] sm:min-w-[70px] md:min-w-[80px]
                          bg-white/20 backdrop-blur-xl
                          rounded-xl px-3 py-2
                          border border-white/30
                          shadow-lg
                        "
                      >
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#a2481b] drop-shadow-md">
                          {value}
                        </div>
                        <div className="uppercase text-xs sm:text-sm tracking-widest mt-1 text-[#a2481b]">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {status === "celebration" && (
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-widest text-pink-200">
                  Our Wedding Day is Here!
                </h2>
              )}

              {status === "thankyou" && (
                <h2 className="text-xl sm:text-2xl font-semibold tracking-widest text-white/90">
                  Thank You for Celebrating With Us
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for photo */}
      {openPhoto && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <button
            onClick={() => setOpenPhoto(false)}
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
          <div className="relative max-w-3xl w-full px-4">
            <img
              src={story2}
              alt="Expanded view"
              className="w-full h-auto rounded-xl shadow-2xl object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}