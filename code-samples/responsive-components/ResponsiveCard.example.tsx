import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

type ResponsiveCardProps = {
  title: string;
  value: string;
  status: 'normal' | 'review' | 'alert';
  detail: string;
};

const statusColors = {
  normal: '#16A34A',
  review: '#F59E0B',
  alert: '#DC2626',
};

export function ResponsiveCardExample({
  title,
  value,
  status,
  detail,
}: ResponsiveCardProps) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={[styles.card, isTablet && styles.tabletCard]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.statusDot, { backgroundColor: statusColors[status] }]} />
      </View>
      <Text style={[styles.value, isTablet && styles.tabletValue]}>{value}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
}

export function DemoCardGrid() {
  return (
    <View style={styles.grid}>
      <ResponsiveCardExample
        title="Fleet Status"
        value="42"
        status="normal"
        detail="Synthetic vehicles reporting"
      />
      <ResponsiveCardExample
        title="Safety Review"
        value="6"
        status="review"
        detail="Demo events awaiting review"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    gap: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
  },
  tabletCard: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#475569',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  statusDot: {
    borderRadius: 5,
    height: 10,
    width: 10,
  },
  value: {
    color: '#0F172A',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 10,
  },
  tabletValue: {
    fontSize: 36,
  },
  detail: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 6,
  },
});
