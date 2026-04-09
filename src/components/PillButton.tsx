import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { appTheme } from '../theme/theme';

type Props = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
};

export function PillButton({ title, onPress, variant = 'primary', style }: Props) {
  const bg = variant === 'primary' ? appTheme.colors.accentBlue : appTheme.colors.panelElevated;
  return (
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor: bg }, style]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 44,
    borderRadius: appTheme.radius.pill,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: appTheme.spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  text: {
    color: appTheme.colors.textPrimary,
    fontWeight: '600',
    fontSize: 14,
  },
});
