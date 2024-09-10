import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./app-location-map.css";

interface LatLng {
  lat: number;
  lng: number;
}

interface LocationMapProps {
  cityId?: LatLng;
  className?: string;
  containerStyle?: React.CSSProperties;
  clickableIcons?: boolean;
  zoom?: number;
  mapKey: string;
}

const AppLocationMap = ({
  cityId,
  className,
  containerStyle,
  clickableIcons,
  zoom = 10,
  mapKey,
}: LocationMapProps) => {
  const [center, setCenter] = useState<LatLng | null>(null);

  useEffect(() => {
    if (cityId) {
      setCenter(cityId);
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }
    }
  }, [cityId]);

  return (
    <div className={`appLocationMap ${className}`}>
      <LoadScript googleMapsApiKey={mapKey}>
        <div style={containerStyle}>
          {center && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              clickableIcons={clickableIcons}
              zoom={zoom}
            />
          )}
        </div>
      </LoadScript>
    </div>
  );
};

export default AppLocationMap;
