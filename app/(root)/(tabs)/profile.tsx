// import React from "react";
// import { View, Text, ScrollView, Switch, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useResponsive } from "@/hooks/Responsive";
// import StatCard from "@/components/StatCard";
// import Achievement from "@/components/Achievement";
// import SettingRow from "@/components/SettingRow";
// import { useRouter } from "expo-router";


// const Profile = () => {
//     const { isSmallDevice, spacing, text } = useResponsive();
//     const router = useRouter();

//     return (
//         <SafeAreaView className="flex-1 bg-gray-50">
//             <ScrollView
//                 className={`flex-1 bg-gray-50 ${spacing.containerPadding}`}
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{ paddingBottom: 20 }}
//             >
//                 {/* PARENT ACCOUNT (LEFT DESIGN) */}
//                 <View className="flex-row justify-between items-center">
//                     <View className="flex-1 min-w-0 mr-3">
//                         <Text
//                             className={`${text["2xl"]} font-bold text-gray-800`}
//                             numberOfLines={1}
//                         >
//                             Settings ⚙️
//                         </Text>
//                         <Text className={`text-gray-500 ${text.sm} mb-3`} numberOfLines={1}>
//                             Preference and Account
//                         </Text>
//                     </View>
//                 </View>
//                 <View
//                     className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm ${spacing.marginBottom}`}
//                 >
//                     <TouchableOpacity
//                         activeOpacity={0.8}
//                         className={`flex-row items-center ${spacing.cardPadding} rounded-xl`}
//                     >
//                         {/* LEFT SIDE */}
//                         <View className="flex-row items-center flex-1 min-w-0">
//                             <View
//                                 className={`h-9 w-9 rounded-full bg-blue-200 items-center justify-center ${
//                                     isSmallDevice ? "mr-2" : "mr-3"
//                                 }`}
//                             >
//                                 <Text className={`text-blue-700 font-bold ${text.base}`}>P</Text>
//                             </View>

//                             <View className="min-w-0">
//                                 <Text
//                                     className={`font-semibold text-gray-900 ${text.base}`}
//                                     numberOfLines={1}
//                                 >
//                                     Parent Account
//                                 </Text>
//                                 <Text className={`${text.sm} text-gray-500`} numberOfLines={1}>
//                                     parent@example.com
//                                 </Text>
//                             </View>
//                         </View>

//                         {/* RIGHT SIDE - SIGN OUT */}
//                         <TouchableOpacity onPress={() =>  router.push("/(auth)/sign-in")}
//                             activeOpacity={0.8}
//                             className="bg-red-500 rounded-xl px-4 py-2 ml-3"
//                         >
//                             <Text className="text-white font-semibold text-sm">Sign Out</Text>
//                         </TouchableOpacity>
//                     </TouchableOpacity>
//                 </View>
//                 {/* DASHBOARD (RIGHT DESIGN – FULL) */}
//                 <View
//                     className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm ${spacing.marginBottom}`}
//                 >
//                     <View className={`flex-row justify-between ${isSmallDevice ? "mb-3" : "mb-4"}`}>
//                         <StatCard label="Sessions" value="247" isSmall={isSmallDevice} />
//                         <StatCard label="Total Time" value="103h" isSmall={isSmallDevice} />
//                     </View>
//                     <View className="flex-row justify-between">
//                         <StatCard label="Avg Score" value="78%" isSmall={isSmallDevice} />
//                         <StatCard label="Current Streak" value="7 🔥" isSmall={isSmallDevice} />
//                     </View>
//                 </View>
//                 {/* ACHIEVEMENTS */}
//                 <View
//                     className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm ${spacing.marginBottom}`}
//                 >
//                     <Text
//                         className={`font-semibold text-gray-900 ${isSmallDevice ? "mb-2" : "mb-3"} ${text.base}`}
//                     >
//                         🏆 Achievements
//                     </Text>
//                     <Achievement label="First Session" isSmall={isSmallDevice} />
//                     <Achievement label="100 Sessions" isSmall={isSmallDevice} />
//                     <Achievement label="7 Day Streak" isSmall={isSmallDevice} />
//                     <Achievement label="Perfect Focus" isSmall={isSmallDevice} />
//                 </View>
//                 {/* SETTINGS */}
//                 <View
//                     className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm ${spacing.marginBottom}`}
//                 >
//                     <Text
//                         className={`font-semibold text-gray-900 ${isSmallDevice ? "mb-2" : "mb-3"} ${text.base}`}
//                     >
//                         ⚙️ Settings
//                     </Text>
//                     <SettingRow label="Notifications" value="Enabled" isSmall={isSmallDevice} />
//                     <SettingRow
//                         label="Session Duration"
//                         value="25 minutes"
//                         isSmall={isSmallDevice}
//                     />
//                     <SettingRow label="Focus Goal" value="80%" isSmall={isSmallDevice} />
//                     <View
//                         className={`flex-row items-center justify-between ${isSmallDevice ? "py-2" : "py-3"}`}
//                     >
//                         <Text className={`text-gray-700 ${text.base}`}>Night Mode</Text>
//                         <Switch
//                             trackColor={{ false: "#d1d5db", true: "#93c5fd" }}
//                             thumbColor="#ffffff"
//                             style={{ transform: [{ scale: isSmallDevice ? 0.9 : 1 }] }}
//                         />
//                     </View>
//                 </View>
//                 {/* DEVICE CONNECTION */}
//                 <View
//                     className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm ${spacing.marginBottom}`}
//                 >
//                     <Text className={`font-semibold text-gray-900 mb-2 ${text.base}`}>
//                         📡 Device Connection
//                     </Text>
//                     <Text className={`text-green-600 font-medium ${text.base}`}>● Connected</Text>
//                     <Text className={`${text.sm} text-gray-500 mt-1`}>IoT Focus Monitor v2.0</Text>
//                 </View>
//                 {/* ABOUT */}
//                 <View className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm`}>
//                     <Text className={`font-semibold text-gray-900 mb-2 ${text.base}`}>
//                         ℹ️ About
//                     </Text>
//                     <Text className={`${text.sm} text-gray-500 leading-5`}>
//                         ByeByeBrainrot uses AI-powered IoT sensors to monitor your focus and comfort
//                         levels during study sessions.
//                     </Text>
//                     <Text className="text-xs text-gray-400 mt-2">Version 1.0.0</Text>
//                 </View>
//                 // Add a sign out button in your UI:
//                 <View className="max-w[90%] items-center"></View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// export default Profile;


// TEST
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Switch, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useResponsive } from "@/hooks/Responsive";
import StatCard from "@/components/StatCard";
import Achievement from "@/components/Achievement";
import SettingRow from "@/components/SettingRow";
import { useRouter } from "expo-router";
import { supabase } from "@/lib/supabase"; // Pastikan import ini ada
import { User } from "@supabase/supabase-js";

const Profile = () => {
  const { isSmallDevice, spacing, text } = useResponsive();
  const router = useRouter();
  
  // State untuk menyimpan data user
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // 1. AMBIL DATA USER SAAT MEMBUKA HALAMAN
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.error("Gagal mengambil data user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, []);

  // 2. FUNGSI LOGOUT YANG BENAR
  const handleSignOut = async () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: async () => {
          await supabase.auth.signOut(); // Hapus sesi dari Supabase
          router.replace("/(auth)/sign-in"); // Kembali ke halaman login
        },
      },
    ]);
  };

  // Helper untuk mendapatkan nama depan dari email (sebagai username sementara)
  const getUsername = () => {
    if (!user || !user.email) return "Guest";
    return user.email.split("@")[0]; // Mengambil teks sebelum @
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView
        className={`flex-1 bg-gray-50 ${spacing.containerPadding}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* HEADER */}
        <View className="flex-row justify-between items-center">
          <View className="flex-1 min-w-0 mr-3">
            <Text
              className={`${text["2xl"]} font-bold text-gray-800`}
              numberOfLines={1}
            >
              Settings ⚙️
            </Text>
            <Text className={`text-gray-500 ${text.sm} mb-3`} numberOfLines={1}>
              Preference and Account
            </Text>
          </View>
        </View>

        {/* USER ACCOUNT CARD */}
        <View
          className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm ${spacing.marginBottom}`}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            className={`flex-row items-center ${spacing.cardPadding} rounded-xl`}
          >
            {/* LEFT SIDE - AVATAR & INFO */}
            <View className="flex-row items-center flex-1 min-w-0">
              <View
                className={`h-9 w-9 rounded-full bg-blue-200 items-center justify-center ${
                  isSmallDevice ? "mr-2" : "mr-3"
                }`}
              >
                {/* Menampilkan Inisial User */}
                <Text className={`text-blue-700 font-bold ${text.base}`}>
                  {user?.email ? user.email.charAt(0).toUpperCase() : "U"}
                </Text>
              </View>

              <View className="min-w-0">
                <Text
                  className={`font-semibold text-gray-900 ${text.base}`}
                  numberOfLines={1}
                >
                  {/* Menampilkan Nama User (diambil dari email) */}
                  {loading ? "Loading..." : getUsername()}
                </Text>
                <Text className={`${text.sm} text-gray-500`} numberOfLines={1}>
                  {/* Menampilkan Email Asli */}
                  {loading ? "..." : user?.email}
                </Text>
              </View>
            </View>

            {/* RIGHT SIDE - SIGN OUT BUTTON */}
            <TouchableOpacity 
              onPress={handleSignOut}
              activeOpacity={0.8}
              className="bg-red-500 rounded-xl px-4 py-2 ml-3"
            >
              <Text className="text-white font-semibold text-sm">Sign Out</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/* DASHBOARD (STATISTICS) */}
        {/* Note: Data statistik (Sessions, Time, dll) biasanya disimpan di tabel database terpisah (misal: table 'profiles' atau 'stats').
            Saat ini masih hardcoded statis karena Supabase Auth hanya menyimpan email/password. */}
        <View
          className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm ${spacing.marginBottom}`}
        >
          <View className={`flex-row justify-between ${isSmallDevice ? "mb-3" : "mb-4"}`}>
            <StatCard label="Sessions" value="0" isSmall={isSmallDevice} />
            <StatCard label="Total Time" value="0h" isSmall={isSmallDevice} />
          </View>
          <View className="flex-row justify-between">
            <StatCard label="Avg Score" value="0%" isSmall={isSmallDevice} />
            <StatCard label="Current Streak" value="0 🔥" isSmall={isSmallDevice} />
          </View>
        </View>

        {/* ACHIEVEMENTS */}
        <View
          className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm ${spacing.marginBottom}`}
        >
          <Text
            className={`font-semibold text-gray-900 ${isSmallDevice ? "mb-2" : "mb-3"} ${text.base}`}
          >
            🏆 Achievements
          </Text>
          <Achievement label="First Session" isSmall={isSmallDevice} />
          <Achievement label="100 Sessions" isSmall={isSmallDevice} />
          <Achievement label="7 Day Streak" isSmall={isSmallDevice} />
          <Achievement label="Perfect Focus" isSmall={isSmallDevice} />
        </View>

        {/* SETTINGS */}
        <View
          className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm ${spacing.marginBottom}`}
        >
          <Text
            className={`font-semibold text-gray-900 ${isSmallDevice ? "mb-2" : "mb-3"} ${text.base}`}
          >
            ⚙️ Settings
          </Text>
          <SettingRow label="Notifications" value="Enabled" isSmall={isSmallDevice} />
          <SettingRow
            label="Session Duration"
            value="25 minutes"
            isSmall={isSmallDevice}
          />
          <SettingRow label="Focus Goal" value="80%" isSmall={isSmallDevice} />
          <View
            className={`flex-row items-center justify-between ${isSmallDevice ? "py-2" : "py-3"}`}
          >
            <Text className={`text-gray-700 ${text.base}`}>Night Mode</Text>
            <Switch
              trackColor={{ false: "#d1d5db", true: "#93c5fd" }}
              thumbColor="#ffffff"
              style={{ transform: [{ scale: isSmallDevice ? 0.9 : 1 }] }}
            />
          </View>
        </View>

        {/* DEVICE CONNECTION */}
        <View
          className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm ${spacing.marginBottom}`}
        >
          <Text className={`font-semibold text-gray-900 mb-2 ${text.base}`}>
            📡 Device Connection
          </Text>
          <Text className={`text-green-600 font-medium ${text.base}`}>● Connected</Text>
          <Text className={`${text.sm} text-gray-500 mt-1`}>dybro IoT Monitor v1.0</Text>
        </View>

        {/* ABOUT */}
        <View className={`bg-white rounded-2xl ${spacing.cardPadding} shadow-sm`}>
          <Text className={`font-semibold text-gray-900 mb-2 ${text.base}`}>
            ℹ️ About
          </Text>
          <Text className={`${text.sm} text-gray-500 leading-5`}>
            dybro : die you brain rot! uses AI-powered IoT sensors to monitor your focus and comfort
            levels during study sessions.
          </Text>
          <Text className="text-xs text-gray-400 mt-2">Version 1.0.0</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;