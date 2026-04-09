import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { PillButton } from '../components/PillButton';
import { appTheme } from '../theme/theme';
import { sessions } from '../data/mockData';

export function SessionsScreen() {
  return (
    <ScreenContainer>
      <SectionHeader title="Sessions Hub" subtitle="Member seminars and live execution labs" />
      {sessions.map((session) => (
        <GlassCard key={session.title}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>PREMIUM MEMBER ACCESS</Text>
          </View>
          <Text style={styles.title}>{session.title}</Text>
          <Text style={styles.time}>{session.time}</Text>
          <Text style={styles.description}>{session.description}</Text>
          <PillButton title="Reserve Seat" style={styles.button} />
        </GlassCard>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#2A234A',
    borderRadius: appTheme.radius.pill,
    borderWidth: 1,
    borderColor: '#5C4CA4',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: appTheme.spacing.sm,
  },
  badgeText: {
    color: '#C5BBFF',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  title: {
    color: appTheme.colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  time: {
    color: appTheme.colors.accentBlue,
    marginBottom: appTheme.spacing.sm,
    fontSize: 12,
  },
  description: {
    color: appTheme.colors.silver,
    lineHeight: 20,
    fontSize: 13,
    marginBottom: appTheme.spacing.md,
  },
  button: {
    alignSelf: 'flex-start',
    minWidth: 130,
  },
});
