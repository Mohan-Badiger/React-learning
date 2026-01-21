const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
              Build faster. Launch smarter.
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Build Modern Web Apps <br />
              <span className="text-blue-600">With Confidence</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              A clean and scalable platform to design, develop, and deploy
              modern web applications using React and Tailwind CSS.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image / Illustration */}
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-md rounded-xl border border-gray-200 shadow-sm bg-gray-50 p-6">
              <div className="h-48 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 font-semibold">
                Hero Illustration
              </div>
              <p className="mt-4 text-sm text-gray-500 text-center">
                Replace this with an image, SVG, or dashboard preview
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
