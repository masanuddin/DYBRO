import { Stack } from "expo-router";
import "./global.css";
import { ChildProvider } from "../contexts/ChildContext";

export default function RootLayout() {
  return (
    <ChildProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </ChildProvider>
  );
}