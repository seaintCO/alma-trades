import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { appTheme } from '../theme/theme';

type Props = {
  children: ReactNode;
};

export function ScreenContainer({ children }: Props) {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: appTheme.colors.background,
  },
  content: {
    paddingHorizontal: appTheme.spacing.lg,
    paddingVertical: appTheme.spacing.xl,
    gap: appTheme.spacing.lg,
  },
});
