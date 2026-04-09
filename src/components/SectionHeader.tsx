import { StyleSheet, Text, View } from 'react-native';
import { appTheme } from '../theme/theme';

type Props = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 4 },
  title: {
    color: appTheme.colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    color: appTheme.colors.textSecondary,
    fontSize: 13,
  },
});
