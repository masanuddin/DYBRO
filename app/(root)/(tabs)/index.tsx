// import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useState } from "react";
// import { useResponsive } from "@/hooks/Responsive";

// import SummaryToday from "@/components/SummaryToday";
// import { STATUS_CONFIG } from "@/constants";
// import { FocusStatus } from "@/types/type";

// export default function App() {
//     // 🔥 MOCK STATUS (NANTI DIGANTI DARI BACKEND)
//     const [status, setStatus] = useState<FocusStatus>("focused");
//     const { isSmallDevice, spacing, text, size } = useResponsive();

//     const config = STATUS_CONFIG[status];

//     return (
//         <SafeAreaView className="flex-1 bg-[#FAF9F6]">
//             <ScrollView
//                 className="flex-1"
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{ paddingBottom: 20 }}
//             >
//                 <View className={`flex-1 ${spacing.containerPadding} pt-6 ${spacing.gap}`}>
//                     {/* ================= HEADER ================= */}
//                     <View className="flex-row justify-between items-center">
//                         <View className="flex-1 min-w-0 mr-3">
//                             <Text
//                                 className={`${text["2xl"]} font-bold text-gray-800`}
//                                 numberOfLines={1}
//                             >
//                                 Hi, Parent 👋
//                             </Text>
//                             <Text className={`text-gray-500 ${text.sm}`} numberOfLines={1}>
//                                 Monitoring Emma's focus
//                             </Text>
//                         </View>

//                         <View
//                             className={`flex-row items-center bg-green-100 ${isSmallDevice ? "px-3 py-1.5" : "px-4 py-2"} rounded-full`}
//                         >
//                             <View className="w-2 h-2 bg-green-500 rounded-full mr-2" />
//                             <Text className={`text-green-600 font-medium ${text.sm}`}>Online</Text>
//                         </View>
//                     </View>

//                     {/* ================= STATUS CARD ================= */}
//                     <View
//                         className={`bg-white rounded-3xl ${spacing.cardPadding} flex-row items-center shadow-sm`}
//                     >
//                         <View
//                             className={`${isSmallDevice ? "w-14 h-14" : "w-16 h-16"} rounded-full bg-[#333] items-center justify-center ${isSmallDevice ? "mr-3" : "mr-4"}`}
//                         >
//                             <Image
//                                 source={config.icon}
//                                 className={`${isSmallDevice ? "w-10 h-10" : "w-12 h-12"}`}
//                                 resizeMode="contain"
//                             />
//                         </View>

//                         <View className="flex-1 min-w-0">
//                             <View
//                                 className={`self-start flex-row items-center ${isSmallDevice ? "px-2.5 py-1" : "px-3 py-1"} rounded-full mb-2 ${config.badgeBg}`}
//                             >
//                                 <Text className={`${text.sm} font-medium ${config.badgeText}`}>
//                                     👁 {config.label}
//                                 </Text>
//                             </View>

//                             <Text
//                                 className={`text-gray-700 font-medium ${text.sm}`}
//                                 numberOfLines={3}
//                             >
//                                 {status === "focused" && "Great job! Keep up the focus! ✨"}
//                                 {status === "distracted" &&
//                                     "Emma seems distracted. A gentle reminder could help 👀"}
//                                 {status === "away" && "Emma is currently away from the device 🚶‍♀️"}
//                             </Text>
//                         </View>
//                     </View>

//                     {/* ================= DEV CONTROLS (REMOVE LATER) ================= */}
//                     <View className={`flex-row justify-between ${spacing.gap}`}>
//                         {(["focused", "distracted", "away"] as FocusStatus[]).map((s) => (
//                             <TouchableOpacity
//                                 key={s}
//                                 onPress={() => setStatus(s)}
//                                 className={`flex-1 bg-gray-200 ${isSmallDevice ? "px-3 py-2" : "px-4 py-2"} rounded-full items-center`}
//                                 activeOpacity={0.7}
//                                 hitSlop={{ top: 10, bottom: 10, left: 5, right: 5 }}
//                             >
//                                 <Text className={`capitalize ${text.sm}`} numberOfLines={1}>
//                                     {s}
//                                 </Text>
//                             </TouchableOpacity>
//                         ))}
//                     </View>

//                     {/* ================= FOCUS TIMER ================= */}
//                     <View
//                         className={`bg-white rounded-3xl ${isSmallDevice ? "p-5" : "p-6"} items-center shadow-sm`}
//                     >
//                         <Text
//                             className={`${text.lg} font-semibold text-gray-800 ${isSmallDevice ? "mb-4" : "mb-6"}`}
//                         >
//                             Pomodoro Session
//                         </Text>

//                         <View
//                             className={`${isSmallDevice ? "w-56 h-56" : "w-64 h-64"} rounded-full ${isSmallDevice ? "border-[10px]" : "border-[12px]"} border-blue-400 items-center justify-center ${isSmallDevice ? "mb-4" : "mb-6"}`}
//                         >
//                             <Text
//                                 className={`${isSmallDevice ? "text-4xl" : "text-5xl"} font-bold text-gray-800`}
//                             >
//                                 25:00
//                             </Text>
//                             <Text className={`text-gray-500 mt-2 ${text.sm}`}>Ready to focus</Text>
//                         </View>
//                     </View>

//                     {/* ================= SUMMARY ================= */}
//                     <View>
//                         <Text className={`${text.lg} font-semibold text-gray-800 mb-3`}>
//                             Today's Summary
//                         </Text>

//                         <View className={`flex-row justify-between ${spacing.gap}`}>
//                             <SummaryToday
//                                 label="Focused"
//                                 value="2h 45m"
//                                 color="green"
//                                 isSmall={isSmallDevice}
//                             />
//                             <SummaryToday
//                                 label="Phone Events"
//                                 value="5"
//                                 color="red"
//                                 isSmall={isSmallDevice}
//                             />
//                             <SummaryToday
//                                 label="Away Events"
//                                 value="3"
//                                 color="gray"
//                                 isSmall={isSmallDevice}
//                             />
//                         </View>
//                     </View>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// }

// TEST
import { supabase } from "@/lib/supabase";

import { useResponsive } from "@/hooks/Responsive";
import { MqttClient } from "mqtt";
import { useEffect, useRef, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import Helper MQTT yang sudah dibuat sebelumnya
import { connectToMQTT, MQTT_TOPICS } from "@/lib/mqttClient";

import FocusStatusCard from "@/components/FocusStatusCard";
import SummaryToday from "@/components/SummaryToday";
import { STATUS_CONFIG } from "@/constants";
import { useChild } from "@/contexts/ChildContext";
import { FocusStatus } from "@/types/type";

export default function App() {
  // --- STATE REAL-TIME DARI MQTT ---
  const { childName } = useChild();
  const [status, setStatus] = useState<FocusStatus>("away"); // Default 'away' saat idle
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [sessionStart, setSessionStart] = useState<number | null>(null)
  const [duration, setDuration] = useState<number>(0)
  const [temp, setTemp] = useState<string>("--");
  const [humid, setHumid] = useState<string>("--");
  const [noise, setNoise] = useState<string>("0");
  const [isConnected, setIsConnected] = useState(false);
  const [hasSessionStarted, setHasSessionStarted] = useState(false);
  const [lastState, setLastState] = useState<string | null>(null);
  const sessionStartRef = useRef<number | null>(null);
  const [espState, setEspState] = useState<"IDLE" | "SESSION" | "PAUSED">("IDLE");

  // Client Ref agar bisa disconnect saat unmount
  const [client, setClient] = useState<MqttClient | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const hasEverReceivedState = useRef(false);
  const sessionInitialized = useRef(false);
  // --- [BARU] LOGIC PENYIMPANAN DATA ---
  const isSessionActive = useRef(false); // Penanda sesi jalan/mati
  const sessionStats = useRef({
    totalTicks: 0,
    focusedTicks: 0,
    comfortTicks: 0,
    startTime: null as Date | null,
    currentTemp: 0,
  });

  // Helper: Tentukan apa itu "Nyaman" (Suhu 20-30C & Noise < 60)
  const isComfortable = (t: number, n: number) => t >= 20 && t <= 30 && n < 60;
  const [confidence, setConfidence] = useState<number>(0);
  const CONF_ALPHA = 0.3; // smoothing factor (0.2–0.4 aman)
  const confidenceRef = useRef<number>(0);
  // --- CAM PRIORITY TRACKING ---
  const camLastSeen = useRef<number>(0);
  const CAM_TIMEOUT = 3000; // ms

  

  const smoothConfidence = (newVal: number) => {
    const smoothed =
      CONF_ALPHA * newVal + (1 - CONF_ALPHA) * confidenceRef.current;
    confidenceRef.current = smoothed;
    return smoothed;
  };


  // Helper: Simpan ke Supabase
  const saveSessionToSupabase = async () => {
    if (!sessionStats.current.startTime) return;

    const endTime = new Date();
    const durationMs =
      endTime.getTime() - sessionStats.current.startTime.getTime();
    const durationMinutes = Math.max(1, Math.round(durationMs / 60000));

    // Hitung Skor
    const total = sessionStats.current.totalTicks;
    const focusScore =
      total > 0
        ? Math.round((sessionStats.current.focusedTicks / total) * 100)
        : 0;
    const comfortScore =
      total > 0
        ? Math.round((sessionStats.current.comfortTicks / total) * 100)
        : 0;
    const totalScore = Math.round((focusScore + comfortScore) / 2);

    // Format Tanggal: "Jan 14, 2026"
    const dateText = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    console.log("💾 SAVING:", { focusScore, comfortScore, durationMinutes });

    // Upload
    await supabase.from("study_sessions").insert({
      duration_minutes: durationMinutes,
      focus_score: focusScore,
      comfort_score: comfortScore,
      total_score: totalScore,
      date_text: dateText,
    });

    // Reset Variable
    isSessionActive.current = false;
  };
  // --- [AKHIR BARU] ---

  const { isSmallDevice, spacing, text, size } = useResponsive();

  /**
   * 🔥 UI STATUS FINAL
   * SESSION  -> ikut ML (focused / distracted)
   * PAUSED   -> away
   * IDLE     -> away
   */
  const uiStatus: FocusStatus =
    espState === "SESSION" ? status : "away";
  const config = STATUS_CONFIG[uiStatus];

  // ================= DEBOUNCE / MAJORITY VOTE =================
  const WINDOW_SIZE = 5;
  const statusBuffer = useRef<FocusStatus[]>([]);

  const getMajorityStatus = (arr: FocusStatus[]) => {
    const count = arr.reduce<Record<FocusStatus, number>>(
      (acc, s) => {
        acc[s] = (acc[s] || 0) + 1;
        return acc;
      },
      { focused: 0, distracted: 0, away: 0 }
    );

    if (count.focused >= 3) return "focused";
    if (count.distracted >= 3) return "distracted";
    return "away";
  };

  // --- LOGIC KONEKSI KE ARDUINO ---
  useEffect(() => {
    const mqttClient = connectToMQTT((topic, data) => {

      if (topic === MQTT_TOPICS.CAM) {
        camLastSeen.current = Date.now();

        if (data.status) {
          statusBuffer.current.push(data.status);
          if (statusBuffer.current.length > WINDOW_SIZE) {
            statusBuffer.current.shift();
          }
          setStatus(getMajorityStatus(statusBuffer.current));
        }

        if (typeof data.confidence === "number") {
          const conf = data.confidence <= 1 ? data.confidence * 100 : data.confidence;
          setConfidence(Math.round(smoothConfidence(conf)));
        }
      }

      // 1. DATA FOKUS (Realtime Detection)
      if (topic === MQTT_TOPICS.FOCUS) {
        // Debug to see what the ESP32 is actually sending
        console.log("📥 MQTT Data:", data);

        setNoise(data.noise?.toFixed(1) || "0");

        // NEW LOGIC: Trust the model's classification directly
        // Assuming ESP32 sends: { "status": "distracted", "noise": 15 }
        // OR { "status": "focused", ... } OR { "status": "away", ... }

        if (data.status) {
          statusBuffer.current.push(data.status);

          if (statusBuffer.current.length > WINDOW_SIZE) {
            statusBuffer.current.shift();
          }

          const majority = getMajorityStatus(statusBuffer.current);

          setStatus((prev) => (prev !== majority ? majority : prev));
        }

        // === CONFIDENCE (SMOOTHED) ===
        if (typeof data.confidence === "number") {
          const rawConf =
            data.confidence <= 1
              ? data.confidence * 100
              : data.confidence;

          const smoothConf = smoothConfidence(rawConf);
          setConfidence(Math.round(smoothConf));
        }

        // Fallback: If your model still sends 'isFokus' boolean
        else if (data.isFokus !== undefined) {
          setStatus(data.isFokus ? "focused" : "distracted");
        }

        // --- [BARU] HITUNG SKOR DISINI ---
        if (isSessionActive.current) {
          sessionStats.current.totalTicks += 1;

          // Cek Fokus
          // Pastikan data.status sesuai string dari model ("focused")
          // Atau gunakan logic isFokus jika model belum string
          const isFocus = data.status === "focused" || data.isFokus === true;
          if (isFocus) {
            sessionStats.current.focusedTicks += 1;
          }

          // Cek Nyaman (Pakai temp terakhir & noise sekarang)
          const curNoise = parseFloat(data.noise || "0");
          if (isComfortable(sessionStats.current.currentTemp, curNoise)) {
            sessionStats.current.comfortTicks += 1;
          }
        }
        // --- [AKHIR BARU] ---
      }

            // 2. DATA STATE & TIMER (Session Control)
      if (topic === MQTT_TOPICS.STATE) {
        console.log("📥 STATE:", data.state);

        /* ================= IDLE ================= */
        if (data.state === "IDLE") {
          console.log("🔴 SESSION RESET");

          sessionInitialized.current = false;
          setHasSessionStarted(false);

          setEspState("IDLE");
          setStatus("away");

          sessionStartRef.current = null;
          setSessionStart(null);
          setDuration(0);
          setTimeLeft(0);
          setIsTimerRunning(false);

          return;
        }

        // ================= PAUSED =================
        if (data.state === "PAUSED") {
          console.log("⏸ PAUSED");

          // confidenceRef.current = 0;
          // setConfidence(0);

          setEspState("PAUSED");
          setIsTimerRunning(false); // stop countdown
        }

        // ================= SESSION =================
        if (data.state === "SESSION" && data.duration_s) {
          setEspState("SESSION");

          // 🔒 INIT SESSION HANYA SEKALI
          if (!sessionInitialized.current) {
            console.log("🟢 SESSION INIT (ONCE)");

            sessionInitialized.current = true;
            setHasSessionStarted(true);

            sessionStartRef.current = Date.now();
            setSessionStart(sessionStartRef.current);

            setDuration(data.duration_s);
            setTimeLeft(data.duration_s);
            setIsTimerRunning(true);
          }

          return;
        }
        if (data.state === "SESSION" && data.duration_s) {
          setEspState("SESSION");

          // 🔒 INIT SESSION HANYA SEKALI
          if (!sessionInitialized.current) {
            console.log("🟢 SESSION INIT (ONCE)");

            sessionInitialized.current = true;
            setHasSessionStarted(true);

            sessionStartRef.current = Date.now();
            setSessionStart(sessionStartRef.current);

            setDuration(data.duration_s);
            setTimeLeft(data.duration_s);
            setIsTimerRunning(true);
          }

          return;
        }


      }
 
      // 3. DATA LINGKUNGAN (Suhu/Lembab)
      if (topic === MQTT_TOPICS.DHT) {
        setTemp(data.temperature?.toFixed(1) || "--");
        setHumid(data.humidity?.toFixed(0) || "--");
        // --- [BARU] SIMPAN TEMP KE REF (Supaya bisa diakses logic 'Comfort') ---
        if (data.temperature) {
          sessionStats.current.currentTemp = data.temperature;
        }
      }
    });

    // Handler untuk indikator Online/Offline
    mqttClient.on("connect", () => setIsConnected(true));
    mqttClient.on("offline", () => setIsConnected(false));
    mqttClient.on("error", () => setIsConnected(false));

    setClient(mqttClient);

    // Cleanup saat keluar halaman
    return () => {
      if (mqttClient) mqttClient.end();
    };
  }, []);

    // ⏱ REALTIME TIMER (WAJIB ADA)
  useEffect(() => {
    if (!isTimerRunning || !sessionStart) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, sessionStart]);


  // --- HELPER FORMAT WAKTU (Detik -> MM:SS) ---
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FAF9F6]">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View
          className={`flex-1 ${spacing.containerPadding} pt-6 ${spacing.gap}`}
        >
          {/* ================= HEADER ================= */}
          <View className="flex-row justify-between items-center">
            <View className="flex-1 min-w-0 mr-3">
              <Text
                className={`${text["2xl"]} font-bold text-gray-800`}
                numberOfLines={1}
              >
                Hi, Parent 👋
              </Text>
              <Text className={`text-gray-500 ${text.sm}`} numberOfLines={1}>
                Monitoring {childName}'s focus
              </Text>
            </View>

            {/* Indikator Online Realtime */}
            <View
              className={`flex-row items-center ${isConnected ? "bg-green-100" : "bg-red-100"} ${isSmallDevice ? "px-3 py-1.5" : "px-4 py-2"} rounded-full`}
            >
              <View
                className={`w-2 h-2 ${isConnected ? "bg-green-500" : "bg-red-500"} rounded-full mr-2`}
              />
              <Text
                className={`${isConnected ? "text-green-600" : "text-red-600"} font-medium ${text.sm}`}
              >
                {isConnected ? "Connected" : "Offline"}
              </Text>
            </View>
          </View>

          {/* ================= STATUS CARD ================= */}
          <View
            className={`bg-white rounded-3xl ${spacing.cardPadding} flex-row items-center shadow-sm`}
          >
            <View
              className={`${isSmallDevice ? "w-14 h-14" : "w-16 h-16"} rounded-full bg-[#333] items-center justify-center ${isSmallDevice ? "mr-3" : "mr-4"}`}
            >
              <Image
                source={config.icon}
                className={`${isSmallDevice ? "w-10 h-10" : "w-12 h-12"}`}
                resizeMode="contain"
              />
            </View>

            <View className="flex-1 min-w-0">
              <View
                className={`self-start flex-row items-center ${isSmallDevice ? "px-2.5 py-1" : "px-3 py-1"} rounded-full mb-2 ${config.badgeBg}`}
              >
                <Text className={`${text.sm} font-medium ${config.badgeText}`}>
                  👁 {config.label}
                </Text>
              </View>

              <Text
                className={`text-gray-700 font-medium ${text.sm}`}
                numberOfLines={3}
              >
                {uiStatus === "focused" && "Great job! Keep up the focus! ✨"}
                {uiStatus === "distracted" &&
                  `Distraction detected! Noise level: ${noise}. A gentle reminder could help 👀`}
                {uiStatus === "away" && "Session is currently Idle or Paused 🚶‍♀️"}
              </Text>
            </View>
          </View>

          {/* ================= DEV CONTROLS (Manual Override for Testing) ================= */}
          {/* Bisa dihapus nanti jika sudah yakin dengan MQTT */}
          {/* <View className={`flex-row justify-between ${spacing.gap}`}>
            {(["focused", "distracted", "away"] as FocusStatus[]).map((s) => (
              <TouchableOpacity
                key={s}
                onPress={() => setStatus(s)}
                className={`flex-1 bg-gray-200 ${isSmallDevice ? "px-3 py-2" : "px-4 py-2"} rounded-full items-center`}
                activeOpacity={0.7}
              >
                <Text className={`capitalize ${text.sm}`} numberOfLines={1}>
                  {s}
                </Text>
              </TouchableOpacity>
            ))}
          </View> */}

          {/* ================= FOCUS TIMER (REALTIME) ================= */}
          <View
            className={`bg-white rounded-3xl ${isSmallDevice ? "p-5" : "p-6"} items-center shadow-sm`}
          >
            <Text
              className={`${text.lg} font-semibold text-gray-800 ${isSmallDevice ? "mb-4" : "mb-6"}`}
            >
              Live Session Timer
            </Text>

            <View
              className={`${isSmallDevice ? "w-56 h-56" : "w-64 h-64"} rounded-full ${isSmallDevice ? "border-[10px]" : "border-[12px]"} 
    ${
      uiStatus === "focused"
        ? "border-green-400 bg-green-50" // Green + Light Green BG
        : uiStatus === "distracted"
          ? "border-red-500 bg-red-50" // Red + Light Red BG
          : "border-gray-300 bg-transparent" // Gray (Away)
    } 
    items-center justify-center ${isSmallDevice ? "mb-4" : "mb-6"}`}
            >
              <Text
                className={`${isSmallDevice ? "text-4xl" : "text-5xl"} font-bold text-gray-800`}
              >
                {formatTime(timeLeft)}
              </Text>
              <Text className={`text-gray-500 mt-2 ${text.sm}`}>
                {timeLeft > 0 ? "Session Active" : "Waiting..."}
              </Text>
            </View>
          </View>

          {/* ================= SUMMARY (REAL SENSOR DATA) ================= */}
          <View>
            <Text className={`${text.lg} font-semibold text-gray-800 mb-3`}>
              Environment Monitor
            </Text>

            <View className="mt-2 mb-4">
            <FocusStatusCard
              uiStatus={uiStatus}
              confidence={confidence}
              isSmall={isSmallDevice}
            />
            </View>

            <View className={`flex-row justify-between ${spacing.gap}`}>
              {/* Saya ganti labelnya agar sesuai data sensor yang tersedia */}
              <SummaryToday
                label="Temp"
                value={`${temp}°C`}
                color="green"
                isSmall={isSmallDevice}
              />
              <SummaryToday
                label="Humidity"
                value={`${humid}%`}
                color="green"
                isSmall={isSmallDevice}
              />
              <SummaryToday
                label="Noise"
                value={noise}
                color={parseFloat(noise) < 5 ? "green" : "red"}
                isSmall={isSmallDevice}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
