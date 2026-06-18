import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type FakeRoutePoint = {
  latitude: number;
  longitude: number;
  speedKph: number;
  label: string;
};

const fakeRoutePoints: FakeRoutePoint[] = [
  { latitude: 0.010, longitude: 0.010, speedKph: 0, label: 'Demo Start' },
  { latitude: 0.012, longitude: 0.013, speedKph: 24, label: 'Demo Point 1' },
  { latitude: 0.016, longitude: 0.016, speedKph: 31, label: 'Demo Point 2' },
  { latitude: 0.020, longitude: 0.019, speedKph: 0, label: 'Demo Stop' },
];

export function RoutePlaybackControlsExample() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentPoint = fakeRoutePoints[currentIndex];
  const progressLabel = useMemo(
    () => `${currentIndex + 1} of ${fakeRoutePoints.length}`,
    [currentIndex],
  );

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((index) => {
        if (index >= fakeRoutePoints.length - 1) {
          setIsPlaying(false);
          return index;
        }

        return index + 1;
      });
    }, 900);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentIndex(0);
  };

  return (
    <View style={styles.panel}>
      <View>
        <Text style={styles.title}>Synthetic Route Playback</Text>
        <Text style={styles.meta}>{progressLabel}</Text>
      </View>

      <View style={styles.stats}>
        <Text style={styles.statLabel}>Point</Text>
        <Text style={styles.statValue}>{currentPoint.label}</Text>
        <Text style={styles.statLabel}>Speed</Text>
        <Text style={styles.statValue}>{currentPoint.speedKph} kph</Text>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.button} onPress={() => setIsPlaying(true)}>
          <Text style={styles.buttonText}>Play</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setIsPlaying(false)}>
          <Text style={styles.buttonText}>Pause</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton} onPress={handleReset}>
          <Text style={styles.secondaryButtonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CBD5E1',
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    padding: 16,
  },
  title: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '700',
  },
  meta: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 2,
  },
  stats: {
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    padding: 12,
  },
  statLabel: {
    color: '#64748B',
    fontSize: 12,
  },
  statValue: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 8,
    flex: 1,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  secondaryButton: {
    alignItems: 'center',
    borderColor: '#2563EB',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    paddingVertical: 10,
  },
  secondaryButtonText: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
  },
});
