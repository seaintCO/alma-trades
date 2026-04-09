import { StyleSheet, Text, View } from 'react-native';
import { GlassCard } from './GlassCard';
import { appTheme } from '../theme/theme';

type Props = {
  label: string;
  value: string;
  tone?: 'default' | 'success' | 'warning' | 'danger';
};

export function MetricCard({ label, value, tone = 'default' }: Props) {
  const valueColor = {
    default: appTheme.colors.silver,
    success: appTheme.colors.success,
    warning: appTheme.colors.warning,
    danger: appTheme.colors.danger,
  }[tone];

  return (
    <GlassCard style={styles.wrapper}>
      <View style={styles.inner}>
        <Text style={styles.label}>{label}</Text>
        <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  inner: {
    gap: 8,
    minHeight: 80,
    justifyContent: 'center',
  },
  label: {
    color: appTheme.colors.textSecondary,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
  },
});
