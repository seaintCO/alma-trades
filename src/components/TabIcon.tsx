import { Ionicons } from '@expo/vector-icons';
import { appTheme } from '../theme/theme';

type Props = {
  name: keyof typeof Ionicons.glyphMap;
  focused: boolean;
};

export function TabIcon({ name, focused }: Props) {
  return (
    <Ionicons
      name={name}
      size={20}
      color={focused ? appTheme.colors.accentBlue : appTheme.colors.textSecondary}
    />
  );
}
