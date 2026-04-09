import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { ProgressBar } from '../components/ProgressBar';
import { appTheme } from '../theme/theme';
import { lessons, quiz } from '../data/mockData';

export function TrainingScreen() {
  const [selected, setSelected] = useState<Record<number, string>>({});

  const score = useMemo(() => {
    return quiz.reduce((sum, q, index) => (selected[index] === q.answer ? sum + 1 : sum), 0);
  }, [selected]);

  return (
    <ScreenContainer>
      <SectionHeader title="Training Suite" subtitle="Structured education for repeatable performance" />

      <GlassCard>
        <SectionHeader title="Completion Stats" subtitle={`${score}/${quiz.length} quiz answers correct`} />
        <Text style={styles.badges}>Badges: Risk Architect • Discipline Operator • Rule Guardian</Text>
      </GlassCard>

      {lessons.map((lesson) => (
        <GlassCard key={lesson.title}>
          <Text style={styles.category}>{lesson.category}</Text>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
          <ProgressBar progress={lesson.progress} color={appTheme.colors.accentViolet} />
          <Text style={styles.progressText}>{lesson.progress}% complete</Text>
        </GlassCard>
      ))}

      <SectionHeader title="Knowledge Check" subtitle="5-question assessment" />
      {quiz.map((item, index) => (
        <GlassCard key={item.question}>
          <Text style={styles.question}>{index + 1}. {item.question}</Text>
          <View style={styles.optionsWrap}>
            {item.options.map((option) => {
              const active = selected[index] === option;
              return (
                <Pressable
                  key={option}
                  onPress={() => setSelected((prev) => ({ ...prev, [index]: option }))}
                  style={[styles.option, active && styles.optionActive]}
                >
                  <Text style={[styles.optionText, active && styles.optionTextActive]}>{option}</Text>
                </Pressable>
              );
            })}
          </View>
        </GlassCard>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  badges: {
    marginTop: appTheme.spacing.sm,
    color: appTheme.colors.silver,
    fontSize: 13,
  },
  category: {
    color: appTheme.colors.accentBlue,
    fontSize: 12,
    marginBottom: 4,
  },
  lessonTitle: {
    color: appTheme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: appTheme.spacing.sm,
  },
  progressText: {
    marginTop: 6,
    color: appTheme.colors.textSecondary,
    fontSize: 12,
  },
  question: {
    color: appTheme.colors.silver,
    marginBottom: appTheme.spacing.sm,
    fontSize: 14,
    lineHeight: 20,
  },
  optionsWrap: {
    gap: 8,
  },
  option: {
    borderRadius: appTheme.radius.md,
    backgroundColor: appTheme.colors.panelElevated,
    borderWidth: 1,
    borderColor: appTheme.colors.border,
    padding: appTheme.spacing.sm,
  },
  optionActive: {
    borderColor: appTheme.colors.accentBlue,
    backgroundColor: '#20325E',
  },
  optionText: {
    color: appTheme.colors.textSecondary,
    fontSize: 13,
  },
  optionTextActive: {
    color: appTheme.colors.textPrimary,
    fontWeight: '600',
  },
});
