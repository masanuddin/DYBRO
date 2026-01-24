import { Redirect } from "expo-router";

export default function Index() {
  // langsung redirect ke sign-in blom bikin middleware
  return <Redirect href="/(auth)/sign-in" />;
}