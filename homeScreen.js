import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function HomeScreen() {
  const [city, setCity] = useState("Fetching...");
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setCity('Permission denied');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      const data = await response.json();
      const foundCity = data.address.city || data.address.town || data.address.village || 'Unknown';
      setCity(foundCity);
      setLoading(false);
    })();
  }, []);

  return (
    <View style={styles.container}>
       <Text>Your City: {city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  }
});
