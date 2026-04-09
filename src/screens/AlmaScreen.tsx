import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { PromptChip } from '../components/PromptChip';
import { appTheme } from '../theme/theme';
import { almaChat } from '../data/mockData';

const prompts = [
  'Analyze my performance',
  'Build my daily plan',
  'Review my discipline',
  'Explain market structure',
  'What should I focus on today?',
  'Review my mistakes',
];

export function AlmaScreen() {
  return (
    <ScreenContainer>
      <SectionHeader title="ALMA Intelligence" subtitle="Strategic AI mentor for execution performance" />

      <View style={styles.orbWrap}>
        <View style={styles.orbOuter}>
          <View style={styles.orbInner} />
        </View>
      </View>

      <GlassCard>
        {almaChat.map((msg, idx) => (
          <View
            key={`${msg.role}-${idx}`}
            style={[styles.bubble, msg.role === 'assistant' ? styles.assistant : styles.user]}
          >
            <Text style={styles.bubbleText}>{msg.text}</Text>
          </View>
        ))}
      </GlassCard>

      <GlassCard>
        <Text style={styles.promptTitle}>Quick Prompts</Text>
        <View style={styles.chipRow}>
          {prompts.map((prompt) => (
            <PromptChip key={prompt} label={prompt} />
          ))}
        </View>
      </GlassCard>

      <View style={styles.inputWrap}>
        <TextInput
          placeholder="Ask ALMA for strategy insight..."
          placeholderTextColor={appTheme.colors.textSecondary}
          style={styles.input}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  orbWrap: {
    alignItems: 'center',
    marginVertical: appTheme.spacing.sm,
  },
  orbOuter: {
    width: 130,
    height: 130,
    borderRadius: 70,
    backgroundColor: 'rgba(91,140,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(138,115,255,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7B8DFF',
    shadowOpacity: 0.6,
    shadowRadius: 22,
  },
  orbInner: {
    width: 72,
    height: 72,
    borderRadius: 40,
    backgroundColor: 'rgba(138,115,255,0.95)',
  },
  bubble: {
    maxWidth: '88%',
    borderRadius: appTheme.radius.md,
    padding: appTheme.spacing.sm,
    marginBottom: appTheme.spacing.sm,
  },
  assistant: {
    alignSelf: 'flex-start',
    backgroundColor: '#1B2340',
    borderWidth: 1,
    borderColor: '#384A80',
  },
  user: {
    alignSelf: 'flex-end',
    backgroundColor: '#24305A',
    borderWidth: 1,
    borderColor: '#4A65C1',
  },
  bubbleText: {
    color: appTheme.colors.textPrimary,
    fontSize: 13,
    lineHeight: 19,
  },
  promptTitle: {
    color: appTheme.colors.silver,
    marginBottom: appTheme.spacing.sm,
    fontSize: 13,
    fontWeight: '600',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inputWrap: {
    marginBottom: appTheme.spacing.xl,
  },
  input: {
    backgroundColor: appTheme.colors.panel,
    borderColor: appTheme.colors.border,
    borderWidth: 1,
    borderRadius: appTheme.radius.pill,
    minHeight: 46,
    color: appTheme.colors.textPrimary,
    paddingHorizontal: appTheme.spacing.md,
  },
});
