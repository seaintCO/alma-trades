import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootTabs } from './src/navigation/RootTabs';
import { appTheme } from './src/theme/theme';

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: appTheme.colors.background,
    card: appTheme.colors.panel,
    text: appTheme.colors.textPrimary,
    border: appTheme.colors.border,
    primary: appTheme.colors.accentBlue,
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <StatusBar style="light" />
        <RootTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
