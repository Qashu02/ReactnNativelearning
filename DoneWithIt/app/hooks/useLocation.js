import * as Location from 'expo-location'
import { useEffect, useState } from 'react'

export default useLocation = () => {
  const [location, setLocation] = useState(null)

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log("Permission denied.")
        return
      }

      const { coords: { longitude, latitude } } = await Location.getLastKnownPositionAsync()
      if (latitude && longitude) {
        setLocation({ latitude, longitude })
      } else {
        console.log("No location data available.")
      }
    } catch (error) {
      console.log("Error getting location:", error)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return location
}
