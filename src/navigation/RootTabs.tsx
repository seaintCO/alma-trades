import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommandScreen } from '../screens/CommandScreen';
import { EngineScreen } from '../screens/EngineScreen';
import { AlmaScreen } from '../screens/AlmaScreen';
import { TrainingScreen } from '../screens/TrainingScreen';
import { SessionsScreen } from '../screens/SessionsScreen';
import { TabIcon } from '../components/TabIcon';
import { appTheme } from '../theme/theme';
import { RootTabParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

const iconMap: Record<keyof RootTabParamList, 'grid' | 'pulse' | 'sparkles' | 'school' | 'videocam'> = {
  Command: 'grid',
  Engine: 'pulse',
  ALMA: 'sparkles',
  Training: 'school',
  Sessions: 'videocam',
};

export function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#090D17',
          borderTopColor: appTheme.colors.border,
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        tabBarActiveTintColor: appTheme.colors.accentBlue,
        tabBarInactiveTintColor: appTheme.colors.textSecondary,
        tabBarIcon: ({ focused }) => <TabIcon name={iconMap[route.name]} focused={focused} />,
      })}
    >
      <Tab.Screen name="Command" component={CommandScreen} />
      <Tab.Screen name="Engine" component={EngineScreen} />
      <Tab.Screen name="ALMA" component={AlmaScreen} />
      <Tab.Screen name="Training" component={TrainingScreen} />
      <Tab.Screen name="Sessions" component={SessionsScreen} />
    </Tab.Navigator>
  );
}
