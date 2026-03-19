export default function Home() {
  return (
    <div>
      {/* Parallax Banner */}
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('heroBanner.jpg')",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white  px-6 py-3 rounded-xl">
          Welcome to IAABO Board 31
        </h1>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-20 py-16 space-y-6 text-gray-700">
        <h2 className="text-3xl font-semibold mb-4">About Our Board</h2>

         <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl vel tincidunt luctus, nunc nisl aliquam nunc, eget aliquam nisl
          nunc eu nisl. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae.
        </p>

        <p>
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
          nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          Praesent mauris.
        </p>

        <p>
          Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
          lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra.
        </p>

        <p>
          Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
        </p>

        <p>
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
          egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
          luctus non, massa.
        </p>

        <p>
          Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi.
          Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit
          amet, augue.
        </p>

        <p>
          Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum
          nisi lectus, commodo ac, facilisis ac, ultricies eu, pede.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl vel tincidunt luctus, nunc nisl aliquam nunc, eget aliquam nisl
          nunc eu nisl. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae.
        </p>

        <p>
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
          nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          Praesent mauris.
        </p>

        <p>
          Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
          lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra.
        </p>

        <p>
          Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
        </p>

        <p>
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
          egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
          luctus non, massa.
        </p>

        <p>
          Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi.
          Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit
          amet, augue.
        </p>

        <p>
          Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum
          nisi lectus, commodo ac, facilisis ac, ultricies eu, pede.
        </p>
      </section>
    </div>
  );
}