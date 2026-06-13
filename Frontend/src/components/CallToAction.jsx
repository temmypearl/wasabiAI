import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-16 px-6 md:px-12 flex items-center justify-center">
      {/* Container Card with Fluid Curved Corners and Liquid/Glass Tint Styling */}
      <div className="w-full max-w-6xl bg-white border border-gray-100 rounded-3xl px-8 py-16 md:py-20 flex flex-col items-center justify-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative overflow-hidden backdrop-blur-md">
        
        {/* Subtle Liquid Glass Background Glow Layer */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear
        -to-br from-gray-100/40 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        
        {/* Main Header Heading */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black relative z-10">
          Ready to share your innovation?
        </h2>

        {/* Informative Subtitle Description */}
        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-normal relative z-10">
          Join the Wasabi × Manus Innovation Hub and put your project in front of everyone.
        </p>

        {/* Action Button Segment Wrapper */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 w-full sm:w-auto">
          
          {/* Primary CTA Action Button */}
          <Link
            to="/submit"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-black text-white text-sm font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-gray-900 active:scale-[0.98] transition duration-150 cursor-pointer shadow-sm"
          >
            <span>Start your submission</span>
            <span className="text-base font-light">→</span>
          </Link>

          {/* Secondary Link Action Button */}
          <Link
            to="/gallery"
            className="w-full sm:w-auto text-sm font-medium text-black hover:opacity-60 active:scale-[0.98] transition duration-150 py-3.5 px-2 flex items-center justify-center cursor-pointer"
          >
            See what's been built
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;