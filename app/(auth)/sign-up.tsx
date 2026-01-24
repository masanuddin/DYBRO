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

const SignUpScreen = () => {
  const router = useRouter();
  const { isSmallDevice, text, size, card, scroll } = useResponsive();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = async () => {
    console.log("--- Memulai Sign Up ---");

    // 1. Validasi
    if (!form.email || !form.password || !form.confirmPassword) {
      Alert.alert("Error", "Mohon isi semua kolom.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Password tidak sama.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });

      console.log("Status Sign Up:", error ? "Gagal" : "Berhasil");

      if (error) {
        Alert.alert("Registrasi Gagal", error.message);
      } else {
        // --- LOGIKA SUKSES ---
        Alert.alert(
          "Registrasi Berhasil!",
          "Silakan cek email untuk verifikasi, lalu login.",
          [
            {
              text: "OK, ke Login",
              onPress: () => {
                // KITA GUNAKAN LOGIKA YANG SAMA PERSIS DENGAN TOMBOL BAWAH
                // Tambahkan setTimeout agar Alert sempat menutup dulu sebelum pindah
                setTimeout(() => {
                  router.push("/(auth)/sign-in");
                }, 100);
              },
            },
          ]
        );
      }
    } catch (e) {
      console.error("System Error:", e);
      Alert.alert("Error", "Terjadi kesalahan sistem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className={"flex-1 bg-[#F7F9FC]"}>
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
          // --- SOLUSI MASALAH INPUT "HOLD" ---
          // Ubah dari 'handled' ke 'always'
          keyboardShouldPersistTaps="always"
        >
          <View className="flex-1 items-center justify-center px-6">
            <Image
              source={icons.akuila}
              resizeMode="contain"
              className={`${size.logo} ${isSmallDevice ? "mb-4" : "mb-6"}`}
            />

            <Text className={`text-3xl font-extrabold text-[#3D2B1F] mb-1`}>
              Create Account
            </Text>
            <Text className={`${text.sm} text-[#8A7F75] text-center mb-8 px-6`}>
              Sign up to start your journey
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

              <InputField
                label="Confirm Password"
                icon="lock"
                secureTextEntry
                value={form.confirmPassword}
                onChangeText={(v) => setForm({ ...form, confirmPassword: v })}
              />

              <TouchableOpacity
                onPress={handleSignUp}
                disabled={loading}
                activeOpacity={0.85}
                className={`bg-blue-500 rounded-xl ${size.button} items-center justify-center mt-6 ${
                  loading ? "opacity-70" : "opacity-100"
                }`}
              >
                <Text className={`text-white font-semibold ${text.base}`}>
                  {loading ? "Creating Account..." : "Sign Up"}
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-center mt-6">
              <Text className={`${text.sm} text-gray-600 mr-1`}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
                <Text className={`${text.sm} text-blue-500 font-semibold`}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
