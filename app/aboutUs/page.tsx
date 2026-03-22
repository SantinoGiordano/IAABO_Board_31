export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-black via-blue-950 to-black min-h-screen">
      <section className="flex justify-center px-4 py-16">
        <div className="w-full max-w-4xl">
          {/* ONE MAIN CARD */}
          <div className="bg-white text-gray-900 shadow-2xl p-8 space-y-10 rounded-3xl">
            
            <h1 className="text-4xl font-bold text-center">About Us</h1>

            <p className="text-lg leading-relaxed text-center">
              Welcome to our website! We are a passionate team dedicated to providing you with the best experience possible.
            </p>

            {/* DIVIDER (same as Home) */}
            <div className="border-t border-gray-200"></div>

            <p className="text-lg leading-relaxed">
              Our mission is to create innovative solutions that make your life easier and more enjoyable. We believe in the power of technology to connect people and improve lives, and we are committed to delivering high-quality products and services that exceed your expectations.
            </p>

            <p className="text-lg leading-relaxed">
              Thank you for being a part of our journey!
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}