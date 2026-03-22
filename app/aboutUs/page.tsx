export default function AboutUs() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[60vh] bg-[url('/sicsDriveToTheBasket.avif')] bg-center bg-cover flex items-center justify-center md:bg-fixed">
      </section>

      {/* MAIN BACKGROUND AND CARD */}
      <div className=" min-h-screen flex justify-center px-4 py-16">
        <div className="w-full max-w-4xl">
          <div className="bg-white text-gray-900 shadow-2xl p-8 space-y-10">
            
            {/* PAGE HEADING */}
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                About Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Welcome to our website! We are a passionate team dedicated to
                providing you with the best experience possible.
              </p>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-gray-200"></div>

            {/* CONTENT */}
            <p className="text-lg text-justify leading-relaxed">
              Our mission is to create innovative solutions that make your life
              easier and more enjoyable. We believe in the power of technology
              to connect people and improve lives, and we are committed to
              delivering high-quality products and services that exceed your
              expectations.
            </p>

            <p className="text-lg text-justify leading-relaxed">
              Thank you for being a part of our journey!
            </p>

            {/* OPTIONAL DIVIDER OR FOOTER STUB */}
            <div className="border-t border-gray-200"></div>

            <div className="text-center text-sm text-gray-600">
              &copy; {new Date().getFullYear()} IAABO Board 31 · All rights reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
