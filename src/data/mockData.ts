export const commandData = {
  objective: 'Execute only A+ setups during NY session and maintain max 1.0R risk per trade.',
  disciplineScore: 86,
  systemStatus: 'All systems operational. ALMA signal engine synced.',
  performanceSnapshot: '+3.4% this cycle | 4 wins / 2 losses',
  challengeStatus: 'Phase 1 - 68% complete',
};

export const engineData = {
  startingBalance: '$100,000',
  currentBalance: '$104,380',
  pnl: '+$4,380',
  target: '$108,000',
  dailyLossLimit: '-$1,500',
  maxDrawdown: '-$5,000',
  winRate: '66%',
  tradeCount: '23',
  completion: 68,
  equityProgress: 55,
  disciplineProgress: 82,
  rules: [
    'Maximum daily loss: 1.5% of account value.',
    'No over-leverage beyond defined risk model.',
    'Close all positions before end-of-day cutoff.',
    'Minimum 5R net target before phase completion.',
  ],
};

export const almaChat = [
  {
    role: 'assistant',
    text: 'Good morning. You are strongest when you wait for structural confirmation and avoid impulse entries.',
  },
  {
    role: 'user',
    text: 'What is my top correction today?',
  },
  {
    role: 'assistant',
    text: 'Reduce early-session overtrading. Your best consistency appears after the first 30 minutes.',
  },
];

export const lessons = [
  { category: 'Risk Management', title: 'Position Sizing Engine', progress: 84 },
  { category: 'Psychology', title: 'Impulse Control Framework', progress: 61 },
  { category: 'Prop Firm Rules', title: 'Challenge Rule Mastery', progress: 92 },
];

export const quiz = [
  {
    question: 'What is the best first action after two consecutive losses?',
    options: ['Pause and review execution', 'Increase lot size', 'Switch strategy immediately'],
    answer: 'Pause and review execution',
  },
  {
    question: 'A daily loss limit primarily protects what?',
    options: ['Emotional control and capital', 'Broker spread costs', 'Charting templates'],
    answer: 'Emotional control and capital',
  },
  {
    question: 'When does discipline usually fail most?',
    options: ['During boredom and revenge states', 'After journaling', 'When risk is fixed'],
    answer: 'During boredom and revenge states',
  },
  {
    question: 'Best way to evaluate an execution error?',
    options: ['Screenshot and annotate setup', 'Ignore and move on', 'Add indicators'],
    answer: 'Screenshot and annotate setup',
  },
  {
    question: 'What defines an A+ setup?',
    options: ['Rules-based confluence and timing', 'Any setup after a loss', 'High volatility only'],
    answer: 'Rules-based confluence and timing',
  },
];

export const sessions = [
  {
    title: 'Market Structure Intensive',
    time: 'Apr 12, 2026 • 7:00 PM ET',
    description: 'Advanced structure mapping and narrative planning workflow for high-quality execution.',
  },
  {
    title: 'Execution Discipline Lab',
    time: 'Apr 15, 2026 • 6:00 PM ET',
    description: 'Live breakdown of entry triggers, invalidations, and overtrading prevention systems.',
  },
  {
    title: 'Risk Management Deep Dive',
    time: 'Apr 18, 2026 • 1:00 PM ET',
    description: 'Build institutional risk limits and adaptive sizing playbooks for consistency.',
  },
  {
    title: 'Prop Performance Breakdown',
    time: 'Apr 22, 2026 • 8:00 PM ET',
    description: 'Phase-by-phase challenge analytics and performance optimization workshop.',
  },
];
