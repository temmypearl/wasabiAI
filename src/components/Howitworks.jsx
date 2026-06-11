// import React from "react";

const Howitworks = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-linear-to-b from-white to-gray-100">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-black">
          How It Works
        </h1>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Three simple steps from idea to spotlight.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">

          <div className="text-4xl mb-4">🚀</div>

          <h2 className="text-lg font-semibold text-black mb-2">
            Submit
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed">
            Share your project with the world through a simple submission form.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">

          <div className="text-4xl mb-4">🔍</div>

          <h2 className="text-lg font-semibold text-black mb-2">
            Explore
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed">
            Discover 500+ innovations in a smooth, searchable gallery.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">

          <div className="text-4xl mb-4">🏆</div>

          <h2 className="text-lg font-semibold text-black mb-2">
            Celebrate
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed">
            Recognize the best builders and showcase winning projects.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Howitworks;