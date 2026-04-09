import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ScreenContainer } from '../components/ScreenContainer';
import { GlassCard } from '../components/GlassCard';
import { MetricCard } from '../components/MetricCard';
import { PillButton } from '../components/PillButton';
import { SectionHeader } from '../components/SectionHeader';
import { appTheme } from '../theme/theme';
import { commandData } from '../data/mockData';
import { RootTabParamList } from '../navigation/types';

export function CommandScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  return (
    <ScreenContainer>
      <View style={styles.hero}>
        <Text style={styles.brand}>ALMA TRADES</Text>
        <Text style={styles.tagline}>The AI Performance OS for Traders</Text>
      </View>

      <GlassCard>
        <SectionHeader title="Command Center" subtitle="Precision-first operations for your trading day" />
        <Text style={styles.objective}>{commandData.objective}</Text>
      </GlassCard>

      <View style={styles.row}>
        <MetricCard label="Discipline Score" value={`${commandData.disciplineScore}%`} tone="success" />
        <MetricCard label="Challenge Status" value="Phase 1" />
      </View>

      <GlassCard>
        <SectionHeader title="System Status" subtitle={commandData.systemStatus} />
      </GlassCard>

      <GlassCard>
        <SectionHeader title="Performance Snapshot" subtitle={commandData.performanceSnapshot} />
      </GlassCard>

      <GlassCard>
        <SectionHeader title="Current Challenge" subtitle={commandData.challengeStatus} />
      </GlassCard>

      <SectionHeader title="Quick Actions" />
      <View style={styles.actions}>
        <PillButton title="Launch Engine" onPress={() => navigation.navigate('Engine')} />
        <PillButton title="Open ALMA" variant="secondary" onPress={() => navigation.navigate('ALMA')} />
        <PillButton
          title="Continue Training"
          variant="secondary"
          onPress={() => navigation.navigate('Training')}
        />
        <PillButton title="View Sessions" variant="secondary" onPress={() => navigation.navigate('Sessions')} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: { gap: 8 },
  brand: {
    color: appTheme.colors.textPrimary,
    fontSize: 34,
    letterSpacing: 1.2,
    fontWeight: '800',
  },
  tagline: {
    color: appTheme.colors.textSecondary,
    fontSize: 14,
  },
  objective: {
    marginTop: appTheme.spacing.sm,
    color: appTheme.colors.silver,
    fontSize: 14,
    lineHeight: 22,
  },
  row: {
    flexDirection: 'row',
    gap: appTheme.spacing.sm,
  },
  actions: {
    gap: appTheme.spacing.sm,
    marginBottom: appTheme.spacing.xl,
  },
});
