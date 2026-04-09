import { Pressable, StyleSheet, Text } from 'react-native';
import { appTheme } from '../theme/theme';

type Props = { label: string };

export function PromptChip({ label }: Props) {
  return (
    <Pressable style={styles.chip}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: appTheme.colors.panelElevated,
    borderColor: appTheme.colors.border,
    borderWidth: 1,
    borderRadius: appTheme.radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    color: appTheme.colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },
});
