const AboutBuilding = () => {
  return (
    <div>
  
      <div
        className="rounded-xl bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('/Image/building.jpg')`, // Replace with the correct path
        }}
      >
        {/* Overlay for better text readability */}
        <div className="bg-black/50 py-16 px-6 rounded-xl">
          {/* Section Title */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              About Our Building
              <span className="text-yellow-400"> PrimePillar</span>
            </h2>
            <p className="text-lg text-gray-200">
              Discover the unique features of our building, offering
              unparalleled comfort, modern amenities, and a prime location.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Prime Location",
                description:
                  "Located in the heart of the city, our building offers easy access to top attractions and business hubs.",
              },
              {
                title: "Modern Amenities",
                description:
                  "Enjoy state-of-the-art facilities, including a fitness center, rooftop garden, swimming pool, and co-working spaces.",
              },
              {
                title: "Sustainability",
                description:
                  "Built with eco-friendly materials and energy-efficient systems, promoting green living.",
              },
              {
                title: "Safety & Security",
                description:
                  "24/7 surveillance and a secure access system ensure peace of mind for all residents and visitors.",
              },
              {
                title: "Community Spaces",
                description:
                  "Designed to foster connections with vibrant community spaces, including lounges and parks.",
              },
              {
                title: "Smart Living",
                description:
                  "Equipped with the latest smart home technology for seamless and convenient living.",
              },
              {
                title: "Reliable Electricity",
                description:
                  "Uninterrupted electricity with a dedicated power backup ensures your home remains fully functional at all times.",
              },
              {
                title: "Modern Elevators",
                description:
                  "High-speed, spacious elevators ensure quick and safe movement across all floors of the building.",
              },
              {
                title: "Ample Parking Spaces",
                description:
                  "Spacious parking areas with secure access for all residents and visitors make parking hassle-free.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-70 shadow-lg rounded-lg p-6 border border-gray-200 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold text-dark-blue mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-800">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;
