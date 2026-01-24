/* =======================
   FILE: /contexts/AuthContext.tsx
   
   SIMPLE VERSION - No Backend Required
   - Email apa aja bisa login
   - Password apa aja diterima
   - Persistent login with AsyncStorage
======================= */

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* =======================
   TYPES
======================= */

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
}

/* =======================
   CONTEXT
======================= */

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* =======================
   PROVIDER
======================= */

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Error checking user:", error);
    } finally {
      setLoading(false);
    }
  };

  // SIGN IN - Accept any email & password
  const signIn = async (email: string, password: string) => {
    try {
      // Simple validation
      if (!email || !password) {
        throw new Error("Email and password required");
      }

      // Create mock user (accept any credentials)
      const mockUser: User = {
        id: Date.now().toString(),
        email: email,
        name: email.split("@")[0], // Use email prefix as name
      };

      // Save to AsyncStorage
      await AsyncStorage.setItem("user", JSON.stringify(mockUser));
      
      // Update state
      setUser(mockUser);
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  };

  // SIGN UP - Accept any credentials
  const signUp = async (email: string, password: string, name: string) => {
    try {
      // Simple validation
      if (!email || !password || !name) {
        throw new Error("All fields required");
      }

      // Create mock user
      const mockUser: User = {
        id: Date.now().toString(),
        email: email,
        name: name,
      };

      // Save to AsyncStorage
      await AsyncStorage.setItem("user", JSON.stringify(mockUser));
      
      // Update state
      setUser(mockUser);
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  // SIGN OUT
  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}