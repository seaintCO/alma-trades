import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { appTheme } from '../theme/theme';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function GlassCard({ children, style }: Props) {
  return (
    <LinearGradient
      colors={['rgba(138,115,255,0.12)', 'rgba(91,140,255,0.08)', 'rgba(255,255,255,0.02)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
    >
      <View style={styles.card}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    borderRadius: appTheme.radius.lg,
    borderWidth: 1,
    borderColor: appTheme.colors.border,
    overflow: 'hidden',
  },
  card: {
    borderRadius: appTheme.radius.lg,
    padding: appTheme.spacing.md,
    backgroundColor: 'rgba(16, 21, 35, 0.92)',
  },
});
