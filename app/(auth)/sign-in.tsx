import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useResponsive } from "@/hooks/Responsive";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
  const router = useRouter();
  const { isSmallDevice, text, size, card, scroll } = useResponsive();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // --- LOGIKA LOGIN EMAIL ---
  const handleSignIn = async () => {
    // 1. Validasi Input
    if (!form.email || !form.password) {
      Alert.alert("Error", "Mohon isi email dan password.");
      return;
    }

    setLoading(true);

    try {
      // 2. Eksekusi Login ke Supabase
      const { error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      if (error) {
        Alert.alert("Login Gagal", error.message);
      } else {
        console.log("🚀 Login Berhasil!");
        // Arahkan ke halaman utama/onboarding setelah sukses
        router.replace("/(onboarding)/welcome");
      }
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Terjadi kesalahan sistem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F7F9FC]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: scroll.paddingBottom,
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View className="flex-1 items-center justify-center px-6">
            <Image
              source={icons.akuila}
              resizeMode="contain"
              className={`${size.logo} ${isSmallDevice ? "mb-4" : "mb-6"}`}
            />
            <Text className="text-3xl font-extrabold text-[#3D2B1F] mb-1">
              Welcome Back
            </Text>
            <Text className={`${text.sm} text-[#8A7F75] text-center mb-8 px-6`}>
              Sign in to continue your progress
            </Text>

            <View
              className={`w-full max-w-[90%] p-8 shadow-xl bg-white rounded-3xl ${card.padding}`}
            >
              <InputField
                label="Email"
                icon="email"
                value={form.email}
                onChangeText={(v) => setForm({ ...form, email: v })}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <InputField
                label="Password"
                icon="lock"
                secureTextEntry
                value={form.password}
                onChangeText={(v) => setForm({ ...form, password: v })}
              />

              <TouchableOpacity
                className="items-end mt-2 mb-2"
                activeOpacity={0.7}
                onPress={() =>
                  Alert.alert("Info", "Fitur Forgot Password belum aktif.")
                }
              >
                <Text className={`${text.sm} text-blue-500 font-medium`}>
                  Forgot password?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSignIn}
                disabled={loading}
                activeOpacity={0.85}
                className={`bg-blue-500 rounded-xl ${
                  size.button
                } items-center justify-center mt-4 ${
                  loading ? "opacity-70" : "opacity-100"
                }`}
              >
                <Text className={`text-white font-semibold ${text.base}`}>
                  {loading ? "Signing In..." : "Sign In"}
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-center mt-8">
              <Text className={`${text.sm} text-gray-600 mr-1`}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
                <Text className={`${text.sm} text-blue-500 font-bold`}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
