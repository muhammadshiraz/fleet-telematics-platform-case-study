import React, { useMemo } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

type ChartItem = {
  label: string;
  value: number;
};

type ReusableBarChartProps = {
  title: string;
  items: ChartItem[];
};

const palette = ['#2563EB', '#16A34A', '#F59E0B', '#DC2626', '#7C3AED'];

export function ReusableBarChartExample({
  title,
  items,
}: ReusableBarChartProps) {
  const width = Math.min(Dimensions.get('window').width - 32, 520);

  const chartData = useMemo(
    () => ({
      labels: items.map((item) => item.label),
      datasets: [{ data: items.map((item) => item.value) }],
    }),
    [items],
  );

  if (items.length === 0) {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.empty}>No demo data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <BarChart
        data={chartData}
        width={width}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        fromZero
        showValuesOnTopOfBars
        chartConfig={{
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          color: (opacity = 1, index = 0) => {
            const color = palette[index % palette.length];
            return opacity === 1 ? color : `${color}99`;
          },
          decimalPlaces: 0,
          labelColor: () => '#334155',
          propsForBackgroundLines: {
            stroke: '#E2E8F0',
          },
        }}
        style={styles.chart}
      />
    </View>
  );
}

export const demoChartItems: ChartItem[] = [
  { label: 'Safe', value: 28 },
  { label: 'Idle', value: 9 },
  { label: 'Review', value: 6 },
  { label: 'Alert', value: 3 },
];

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
  },
  title: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  empty: {
    color: '#64748B',
    fontSize: 14,
  },
  chart: {
    borderRadius: 8,
  },
});
