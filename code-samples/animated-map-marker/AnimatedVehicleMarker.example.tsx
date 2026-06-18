import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';

type DemoPosition = {
  latitude: number;
  longitude: number;
  heading: number;
  status: 'moving' | 'stopped';
};

const fakePositions: DemoPosition[] = [
  { latitude: 0.010, longitude: 0.010, heading: 25, status: 'moving' },
  { latitude: 0.014, longitude: 0.015, heading: 60, status: 'moving' },
  { latitude: 0.018, longitude: 0.018, heading: 90, status: 'stopped' },
];

export function AnimatedVehicleMarkerExample() {
  const markerCoordinate = useRef(
    new AnimatedRegion({
      latitude: fakePositions[0].latitude,
      longitude: fakePositions[0].longitude,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
  ).current;

  const heading = useRef(new Animated.Value(fakePositions[0].heading)).current;

  useEffect(() => {
    let index = 1;
    const timer = setInterval(() => {
      const next = fakePositions[index % fakePositions.length];

      markerCoordinate
        .timing({
          latitude: next.latitude,
          longitude: next.longitude,
          duration: 700,
          useNativeDriver: false,
        })
        .start();

      Animated.timing(heading, {
        toValue: next.heading,
        duration: 700,
        useNativeDriver: true,
      }).start();

      index += 1;
    }, 1200);

    return () => clearInterval(timer);
  }, [heading, markerCoordinate]);

  const rotation = heading.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 0.014,
        longitude: 0.014,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      }}
    >
      <Marker.Animated coordinate={markerCoordinate}>
        <Animated.View style={[styles.marker, { transform: [{ rotate: rotation }] }]}>
          <Text style={styles.markerText}>A</Text>
        </Animated.View>
        <View style={styles.callout}>
          <Text style={styles.calloutTitle}>Demo Vehicle</Text>
          <Text style={styles.calloutText}>Synthetic tracking point</Text>
        </View>
      </Marker.Animated>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 320,
    width: '100%',
  },
  marker: {
    alignItems: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 18,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  markerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  callout: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 6,
    padding: 8,
  },
  calloutTitle: {
    color: '#0F172A',
    fontSize: 12,
    fontWeight: '700',
  },
  calloutText: {
    color: '#475569',
    fontSize: 11,
  },
});
