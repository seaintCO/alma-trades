import { StyleSheet, View } from 'react-native';
import { appTheme } from '../theme/theme';

type Props = {
  progress: number;
  color?: string;
};

export function ProgressBar({ progress, color = appTheme.colors.accentBlue }: Props) {
  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${Math.max(0, Math.min(progress, 100))}%`, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    height: 8,
    borderRadius: appTheme.radius.pill,
    backgroundColor: '#212A3F',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: appTheme.radius.pill,
  },
});
