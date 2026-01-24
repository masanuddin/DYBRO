import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { Platform } from "react-native";
import "react-native-url-polyfill/auto";

// Get variables from your .env file
const supabaseUrl =
  process.env.EXPO_PUBLIC_SUPABASE_URL ||
  "https://bppzkogoqbqgrsuaklcs.supabase.co";
const supabaseAnonKey =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwcHprb2dvcWJxZ3JzdWFrbGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxMTUxMDUsImV4cCI6MjA4MzY5MTEwNX0.xqrz5B8bl6xiTb2GfbqHa3q1hyNM3oOXxlzjvcdDJGU";

// --- PERBAIKAN DI SINI ---
// Kita buat adapter kustom untuk mengecek apakah sedang di server atau client
const ExpoStorageAdapter = {
  getItem: (key: string) => {
    // Jika di web server (SSR), return null (jangan panggil AsyncStorage)
    if (Platform.OS === "web" && typeof window === "undefined") {
      return Promise.resolve(null);
    }
    return AsyncStorage.getItem(key);
  },
  setItem: (key: string, value: string) => {
    if (Platform.OS === "web" && typeof window === "undefined") {
      return Promise.resolve();
    }
    return AsyncStorage.setItem(key, value);
  },
  removeItem: (key: string) => {
    if (Platform.OS === "web" && typeof window === "undefined") {
      return Promise.resolve();
    }
    return AsyncStorage.removeItem(key);
  },
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoStorageAdapter, // Gunakan adapter yang aman ini, bukan AsyncStorage langsung
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
