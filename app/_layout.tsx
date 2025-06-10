import '../global.css';

import { Stack } from 'expo-router';
import RecordProvider from '~/hooks/RecordProvider';

export default function RootLayout() {

  return (
    <RecordProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="check-id" options={{ title: 'Check Cigarette ID' }} />
        <Stack.Screen name="key-in-birthday" options={{ headerShown: false }} />
        <Stack.Screen name="is-counterfeit" options={{ headerShown: false }} />
        <Stack.Screen name="is-not-counterfeit" options={{ headerShown: false }} />
        <Stack.Screen name="is-eligible" options={{ headerShown: false }} />
        <Stack.Screen name="is-not-eligible" options={{ headerShown: false }} />
        <Stack.Screen name="transaction-details" options={{ headerShown: false }} />
      </Stack>
    </RecordProvider>
  );
}
