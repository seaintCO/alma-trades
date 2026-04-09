import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionHeader } from '../components/SectionHeader';
import { MetricCard } from '../components/MetricCard';
import { GlassCard } from '../components/GlassCard';
import { ProgressBar } from '../components/ProgressBar';
import { PillButton } from '../components/PillButton';
import { appTheme } from '../theme/theme';
import { engineData } from '../data/mockData';

export function EngineScreen() {
  return (
    <ScreenContainer>
      <SectionHeader title="Performance Engine" subtitle="Simulation environment and challenge telemetry" />

      <View style={styles.row}>
        <MetricCard label="Starting Balance" value={engineData.startingBalance} />
        <MetricCard label="Current Balance" value={engineData.currentBalance} tone="success" />
      </View>
      <View style={styles.row}>
        <MetricCard label="Current P&L" value={engineData.pnl} tone="success" />
        <MetricCard label="Win Rate" value={engineData.winRate} />
      </View>
      <View style={styles.row}>
        <MetricCard label="Profit Target" value={engineData.target} />
        <MetricCard label="Trade Count" value={engineData.tradeCount} />
      </View>
      <View style={styles.row}>
        <MetricCard label="Daily Loss Limit" value={engineData.dailyLossLimit} tone="warning" />
        <MetricCard label="Max Drawdown" value={engineData.maxDrawdown} tone="danger" />
      </View>

      <GlassCard>
        <SectionHeader title="Challenge Completion" subtitle={`${engineData.completion}% complete`} />
        <View style={styles.progressWrap}>
          <Text style={styles.progressLabel}>Phase Progress</Text>
          <ProgressBar progress={engineData.completion} color={appTheme.colors.accentViolet} />
          <Text style={styles.progressLabel}>Equity Objective</Text>
          <ProgressBar progress={engineData.equityProgress} />
          <Text style={styles.progressLabel}>Discipline Stability</Text>
          <ProgressBar progress={engineData.disciplineProgress} color={appTheme.colors.success} />
        </View>
      </GlassCard>

      <GlassCard>
        <SectionHeader title="Challenge Rules" />
        {engineData.rules.map((rule) => (
          <Text key={rule} style={styles.rule}>• {rule}</Text>
        ))}
      </GlassCard>

      <View style={styles.actionsRow}>
        <PillButton title="Log Trade" style={styles.flex} />
        <PillButton title="Reset Engine" variant="secondary" style={styles.flex} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: appTheme.spacing.sm,
  },
  progressWrap: {
    gap: appTheme.spacing.sm,
    marginTop: appTheme.spacing.md,
  },
  progressLabel: {
    color: appTheme.colors.textSecondary,
    fontSize: 12,
  },
  rule: {
    color: appTheme.colors.silver,
    marginTop: 8,
    fontSize: 13,
    lineHeight: 18,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: appTheme.spacing.sm,
    marginBottom: appTheme.spacing.xl,
  },
  flex: {
    flex: 1,
  },
});
