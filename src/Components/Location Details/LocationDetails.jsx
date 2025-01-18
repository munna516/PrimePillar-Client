import GoogleMapReact from "google-map-react";
import Space from "../Space/Space";
import Marker from "./Marker";

const LocationDetails = () => {
  const defaultProps = {
    center: {
      lat: 23.8759,
      lng: 90.3795,
    },
    zoom: 11,
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-4xl mb-5">
          Our Location
        </h1>
        <p className="text-lg text-gray-700">
          Discover where we are located and how to get to your new home at
          PrimePillar. Conveniently located in the heart of the city, our
          building is easily accessible.
        </p>
      </div>
      <Space></Space>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="h-96 w-full shadow-lg rounded-lg overflow-hidden">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: import.meta.env.VITE_MAP_API,
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <Marker
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
              text="⚲"
            />
          </GoogleMapReact>
        </div>

        <div className="text-gray-800 space-y-4">
          <h3 className="text-2xl font-bold text-dark-blue">How to Get Here</h3>
          <p className="text-lg">
            Our building is located at{" "}
            <strong>Uttara Rupayan City, Dhaka, Bangladesh</strong>. It's just a
            10-minute walk from the nearest subway metro station and a 15-minute
            drive from the central bus terminal.
          </p>
          <ul className="list-disc list-inside">
            <li>
              Nearest Subway: <strong>Metrorail North Station</strong>
            </li>
            <li>
              Nearest Bus Stop: <strong>House Building Central Bus Stop</strong>
            </li>
            <li>
              Parking Available:{" "}
              <strong>Building Basement & Nearby Lots</strong>
            </li>
          </ul>
          <p className="text-lg">
            For more details, feel free to contact us at{" "}
            <a
              href="mailto:mehedihasanmunna516@gmail.com"
              className="text-blue-600 underline"
            >
              mehedihasanmunna516@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
