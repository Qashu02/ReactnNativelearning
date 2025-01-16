import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Permission denied.");
        setError("Permission denied");
        return;
      }

      // Use getCurrentPositionAsync for the current location
      const { coords: { longitude, latitude } } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High, // You can set accuracy to High, Medium, Low, etc.
      });

      if (latitude && longitude) {
        setLocation({ latitude, longitude });
      } else {
        console.log("No location data available.");
        setError("No location data available.");
      }
    } catch (error) {
      console.log("Error getting location:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
